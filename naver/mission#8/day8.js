// 1. 상태와 이벤트를 상수로 선언
const States = Object.freeze({
  IDLE: "IDLE",
  INVITED: "INVITED",
  ACCEPTED: "ACCEPTED",
  ESTABLISHED: "ESTABLISHED",
  CLOSING: "CLOSING",
  CANCELLING: "CANCELLING",
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  REDIRECTING: "REDIRECTING",
  REDIRECTED: "REDIRECTED",
  AUTHREQUESTED: "AUTHREQUESTED",
  TERMINATED: "TERMINATED",
});

const Events = Object.freeze({
  INVITE: "INVITE",
  ACK: "ACK",
  BYE: "BYE",
  CANCEL: "CANCEL",
  RINGING_180: "180",
  OK_200: "200",
  OK_200_CANCEL: "200(CANCEL)",
  OK_200_BYE: "200(BYE)",
  MOVED_301: "301",
  NOT_FOUND_404: "404",
  AUTH_REQUIRED_407: "407",
  REQUEST_TERMINATED_487: "487",
  TIMEOUT: "<timeout>",
});

// 3. 조건문 없는 범위 처리 구현
const INVITED_RANGE_MAP = Object.freeze([
  { min: 100, max: 199, state: States.INVITED }, // 1xx: 상태 유지
  { min: 300, max: 399, state: States.REDIRECTING }, // 3xx: REDIRECTING
  { min: 400, max: 699, state: States.FAILED }, // 4xx~6xx: FAILED
]);

// 2. FROM-TO 전이 테이블 선언 (구체 코드 우선, 범위 매칭은 별도 함수에서 처리)
const TransitionTable = Object.freeze({
  // IDLE에서 시작
  [`${States.IDLE}:${Events.INVITE}`]: States.INVITED,

  // INVITED 상태에서의 다양한 전환
  [`${States.INVITED}:${Events.RINGING_180}`]: States.ACCEPTED,
  [`${States.INVITED}:${Events.CANCEL}`]: States.CANCELLING,
  [`${States.INVITED}:${Events.AUTH_REQUIRED_407}`]: States.AUTHREQUESTED,
  [`${States.INVITED}:${Events.MOVED_301}`]: States.REDIRECTING,
  [`${States.INVITED}:${Events.NOT_FOUND_404}`]: States.FAILED,

  // 추가 전환 규칙들
  [`${States.ACCEPTED}:${Events.OK_200}`]: States.ESTABLISHED,
  [`${States.ESTABLISHED}:${Events.BYE}`]: States.CLOSING,
  [`${States.CLOSING}:${Events.OK_200_BYE}`]: States.TERMINATED,
  [`${States.CANCELLING}:${Events.OK_200_CANCEL}`]: States.CANCELLED,
  [`${States.CANCELLED}:${Events.REQUEST_TERMINATED_487}`]: States.FAILED,
  [`${States.FAILED}:${Events.ACK}`]: States.TERMINATED,
  [`${States.AUTHREQUESTED}:${Events.ACK}`]: States.INVITED,
  [`${States.REDIRECTING}:${Events.ACK}`]: States.REDIRECTED,
  [`${States.REDIRECTED}:${Events.TIMEOUT}`]: States.TERMINATED,
});

// 3. INVITED 상태에서 범위 코드 처리 함수 (구체 코드가 없을 때만 호출)
function matchEventByRange(fromState, event) {
  if (fromState !== States.INVITED) return undefined;

  const code = parseInt(event, 10);
  if (isNaN(code) || event.length !== 3) return undefined;

  // 조건문 없이 find() 메서드로 범위 매칭
  const found = INVITED_RANGE_MAP.find(
    ({ min, max }) => code >= min && code <= max
  );

  return found ? found.state : undefined;
}

// 5. 테스트 실행
const fsm = new SIPStateMachine();

console.log("=== 기존 테스트 케이스 ===");
console.log(
  fsm.processEventSequence(["INVITE", "180", "200", "BYE", "200(BYE)"])
);
// 출력: ["INVITED", "ACCEPTED", "ESTABLISHED", "CLOSING", "TERMINATED"]

fsm.reset();
console.log(
  fsm.processEventSequence(["INVITE", "407", "ACK", "301", "ACK", "<timeout>"])
);
// 출력: ["INVITED", "AUTHREQUESTED", "INVITED", "REDIRECTING", "REDIRECTED", "TERMINATED"]

console.log("=== 새로운 범위 조건 테스트 ===");
fsm.reset();
console.log(fsm.processEventSequence(["INVITE", "302", "ACK", "<timeout>"]));
// 출력: ["INVITED", "REDIRECTING", "REDIRECTED", "TERMINATED"]

fsm.reset();
console.log(fsm.processEventSequence(["INVITE", "486", "ACK"]));
// 출력: ["INVITED", "FAILED", "TERMINATED"]

fsm.reset();
console.log(
  fsm.processEventSequence(["INVITE", "100", "183", "200", "BYE", "200(BYE)"])
);
// 출력: ["INVITED", "INVITED", "INVITED", "ESTABLISHED", "CLOSING", "TERMINATED"]
