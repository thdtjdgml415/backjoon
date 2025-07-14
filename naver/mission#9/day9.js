// 1) 던진 윷문자 → 칸수 매핑
const STEP = new Map([
  ["D", 1], // Do
  ["K", 2], // Gae
  ["G", 3], // Geol
  ["U", 4], // Yut
  ["M", 5], // Mo
]);

// 2) 노드 클래스
class Node {
  constructor(code) {
    this.code = code; // ex. "ZW3", "WX5", "WV3", ...
    this.mainNext = null; // 기본 경로
    this.branchNext = null; // 분기 경로 (W, X, V에서만 설정)
  }
}

// 3) 보드판(그래프) 빌드
function buildBoard() {
  // ——— 큰 노드들 ———
  const Z = new Node("Z"); // 출발/도착
  const W = new Node("ZW5"); // 사각형 하단 끝
  const X = new Node("WX5"); // 우측 끝
  const Y = new Node("XY5"); // 상단 끝
  const V = new Node("WV3"); // 분기점(대각선 합류)

  // ——— 사각형 외곽 작은 칸들 ———
  const bottom = Array.from({ length: 4 }, (_, i) => new Node(`ZW${i + 1}`));
  const right = Array.from({ length: 4 }, (_, i) => new Node(`WX${i + 1}`));
  const top = Array.from({ length: 4 }, (_, i) => new Node(`XY${i + 1}`));
  const left = Array.from({ length: 4 }, (_, i) => new Node(`YZ${i + 1}`));

  // ——— 대각 분기 작은 칸들 ———
  const branchWV = Array.from({ length: 2 }, (_, i) => new Node(`WV${i + 1}`));
  const branchXV = Array.from({ length: 2 }, (_, i) => new Node(`XV${i + 1}`));
  const branchVZ = Array.from({ length: 2 }, (_, i) => new Node(`VZ${i + 1}`));

  // ——— 메인 루프 연결: Z → bottom → W → right → X → top → Y → left → Z ———
  let cur = Z;
  bottom.forEach((n) => {
    cur.mainNext = n;
    cur = n;
  });
  cur.mainNext = W;
  cur = W;
  right.forEach((n) => {
    cur.mainNext = n;
    cur = n;
  });
  cur.mainNext = X;
  cur = X;
  top.forEach((n) => {
    cur.mainNext = n;
    cur = n;
  });
  cur.mainNext = Y;
  cur = Y;
  left.forEach((n) => {
    cur.mainNext = n;
    cur = n;
  });
  cur.mainNext = Z;

  // ——— 분기 설정 ———
  // W → V 경로
  W.branchNext = branchWV[0];
  branchWV[0].mainNext = branchWV[1];
  branchWV[1].mainNext = V;

  // X → V 경로
  X.branchNext = branchXV[0];
  branchXV[0].mainNext = branchXV[1];
  branchXV[1].mainNext = V;

  // V → Z 경로
  V.branchNext = branchVZ[0];
  branchVZ[0].mainNext = branchVZ[1];
  branchVZ[1].mainNext = Z;

  return Z;
}

// 4) 한 참가자 이동 시뮬레이션
function simulate(start, seq) {
  let cur = start;
  let score = 0;

  for (const c of seq) {
    const step = STEP.get(c);
    if (step == null) {
      // 잘못된 문자 발견 → 점수만 리턴, 위치는 ERR
      return { score, loc: "ERR" };
    }
    // N 칸 이동: “던지기”마다 첫 칸은 branch, 나머지는 main
    for (let i = 0; i < step; i++) {
      if (i === 0 && cur.branchNext) {
        cur = cur.branchNext;
      } else {
        cur = cur.mainNext;
      }
      if (!cur) break;
      if (cur === start) score++;
    }
  }

  const loc = cur === start ? "Z" : cur.code;
  return { score, loc };
}

// 5) 메인 API: score()
function score(inputs) {
  // 참가자 수 검사
  if (inputs.length < 2 || inputs.length > 10) {
    return ["ERROR"];
  }
  // 던진 횟수 일치 검사
  const len = inputs[0].length;
  if (!inputs.every((s) => s.length === len)) {
    return ["ERROR"];
  }

  const boardStart = buildBoard();
  return inputs.map((seq) => {
    const { score, loc } = simulate(boardStart, seq);
    return `${score}, ${loc}`;
  });
}

// ——— 검증 ———
console.log(score(["DGD", "MGG"])); // [ '0, ZW5', '1, Z' ]
console.log(score(["DGGG", "MGGA"])); // [ '0, WX5', '1, ERR' ]
console.log(score(["DGDGGK", "DDDDDK", "KKKKKD"]));
// → [ '1, ZW2', '0, WV2', '0, XV1' ]
