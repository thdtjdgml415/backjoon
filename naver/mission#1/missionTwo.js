// 결과코드

// 주사위 게임에서 주사위 눈금에 따라 다음 위치를 계산하는 함수
// 주사위를 던져 특정위치에 도착 시 특정 위치로 이동하는 규칙이 있다.

/**
 * @description 주사위 게임에서 주사위 눈금에 따라 다음 위치를 계산하는 함수
 * @param {number} current
 * @param {number} dice
 * @returns 이동한 다음위치
 */
function nextPosition(current, dice) {
  const next = current + dice;
  if (next == 4) {
    return dice + 10;
  } else if (next == 8) {
    return dice + 22;
  } else if (next == 28) {
    return dice + 48;
  } else if (next == 21) {
    return dice + 21;
  } else if (next == 50) {
    return dice + 17;
  } else if (next == 71) {
    return dice + 21;
  } else if (next == 80) {
    return dice + 19;
  }

  return dice;
}

/**
 * @description 이 함수는 주사위 눈금에 따라 특정 위치에서 뱀에 물려 하강 이동하는 함수
 * @param {number} current
 * @returns 이동한 다음위치
 */
function nextPositionBySnake(current) {
  if (current == 32) {
    return current - 22;
  } else if (current == 36) {
    return current - 30;
  } else if (current == 48) {
    return current - 22;
  } else if (current == 62) {
    return current - 44;
  } else if (current == 88) {
    return current - 64;
  } else if (current == 95) {
    return current - 39;
  } else if (current == 97) {
    return current - 19;
  }
  return current;
}

/**
 * 1 ~ maxDice 까지 주사위를 돌려 100까지 도달하는지 테스트 함수
 * @param {number} maxDice
 * @returns {string} "목적지에 도착했습니다."
 */
function playGameTest(maxDice) {
  let start = 1; // 시작지점
  let next = 1; // 다음위치
  let dice = 0; // 주사위 눈금

  while (start <= 100) {
    // 현재 위치를 확인
    // 1 ~ maxDice 사이에 주사위 눈금을 생성
    dice = Math.floor(Math.random() * maxDice) + 1;
    // 사다리에 탈 수 있는 위치인지 확인하는 함수
    next += nextPosition(start, dice);
    // 뱀에 물렸는지 확인하는 함수
    next = nextPositionBySnake(next);
    // 시작지점, 주사위 값, 다음 위치 로그
    console.log("from=", start, ", dice=", dice, ", next=", next);
    // 시작지점 위치 이동
    start = next;
  }

  return "목적지에 도착했습니다.";
}
// maxDice 라는 파라미터를 통해 주사위의 면체를 동적으로 정의할 수 있다.
console.log(playGameTest(6));
