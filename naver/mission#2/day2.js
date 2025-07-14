// 데이터 입력/출력 부분
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
rl.on("line", (line) => {
  inputs.push(line);
  if (inputs.length === 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const numArray = inputs[0].split(",").map(Number);
  const answer = play(numArray);
  for (const [key, value] of answer) {
    console.log(key + "=" + value);
  }
  rl.close();
});
/**
 * @description 베팅할 카드 정보를 받아 조건에 따라 처리하고 벌점받을 유저와 벌점을 반환하는 함수
 * @param {Array.<Object.<string, number>>} cards
 * @param {number[][]} prevSetCards
 * @returns {{user: 'A'|"B"|"C", panalty: number}[]}
 */
function betGame(cards, prevSetCards) {
  const panaltys = []; // 패널티 점수 기록하는 배열
  for (let info of cards) {
    let user = Object.keys(info)[0];
    const card = info[user]; // 배팅할 카드

    let minDiff = Infinity; // 최소 차이를 나타내는 변수 초기값은 안전하게 무한대로
    let minIdx = -1; // 최소 차이 카드배열의 위치

    for (let i = 0; i < prevSetCards.length; i++) {
      const arr = prevSetCards[i];
      if (arr.length === 0) continue; // 모두 비었으면 넘김

      const last = arr[arr.length - 1];
      const diff = Math.abs(card - last);

      if (diff < minDiff) {
        minDiff = diff;
        minIdx = i;
      }
    }
    if (minIdx === -1) continue;

    const targetArr = prevSetCards[minIdx]; // 최소 차이를 가진 배열(비교할 타겟배열)
    const targetArrLastNum = targetArr[targetArr.length - 1];
    // 배팅할 카드의 번호랑 가장 가까운 세팅된 카드 배열의 마지막 번호와 비교
    if (card < targetArrLastNum) {
      targetArr.push(card);
    } else {
      panaltys.push({ user, panalty: targetArr.length });
      prevSetCards[minIdx] = [];
    }
  }

  return panaltys;
}

/**
 * @description 플레이어의 순서를 지정하기 위해 오름차순 정렬
 * @param {Map(3) { 'A' => number[] , 'B' => number[] , 'C' => number[] }} cardMap
 * @param {number[]} cardList 카드리스트
 * @returns {Array.<Object.<string, number>>} 정렬된 카드 리스트를 반환
 */
function sortingCards(cardMap, cardList) {
  const eachPlayerTurn = []; // 각 플레이어 별로 턴마다 배팅할 카드 항목
  for (let i = 0; i < cardList.length / 3; i++) {
    const turnCards = Array.from(cardMap.entries()).map(([player, values]) => {
      return { [player]: values[i] };
    });
    console.log("turnCards", turnCards);
    // 플레이어들의 순서는 카드 크기의 순서이다. 따라서 오름차순으로 정렬해 순서를 지정
    const sortedCard = turnCards.sort((a, b) => {
      const valA = Object.values(a)[0];
      const valB = Object.values(b)[0];
      return valA - valB;
    });
    eachPlayerTurn.push(sortedCard);
  }
  return eachPlayerTurn;
}

/**
 * @param {number[]} cardList
 * @returns {Array.<Object.<string, number>>}
 */
function setCard(cardList) {
  const cardMap = new Map();
  const users = ["A", "B", "C"];
  cardList.forEach((card, idx) => {
    const user = users[idx % 3];
    if (!cardMap.has(user)) cardMap.set(user, []);
    cardMap.get(user).push(card);
  });

  return cardMap;
}

/**
 * @param {number[]} cardList
 * @returns 유저별 패널티 포인트
 */
function play(param) {
  let prevSetCards = [[10], [30], [50], [80]];
  let panaltyPointMap = new Map([
    ["A", 0],
    ["B", 0],
    ["C", 0],
  ]);
  // 입력 카드 배열이 3배수가 아니라면 모두 패널티가 0점으로 출력
  if (param.length % 3 !== 0) return panaltyPointMap;

  const cards = setCard(param);
  const sortedCards = sortingCards(cards, param);

  for (let round = 0; round < sortedCards.length; round++) {
    const panaltyPoint = betGame(sortedCards[round], prevSetCards);
    for (const { user, panalty } of panaltyPoint) {
      panaltyPointMap.set(user, panaltyPointMap.get(user) + panalty);
    }
  }

  // 출력 형식에 맞게 문자열로 변환
  return new Map(
    Array.from(panaltyPointMap).map(([key, val]) => [key, val.toString()])
  );
}
