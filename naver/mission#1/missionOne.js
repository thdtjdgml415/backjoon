// 주사위 게임에서 주사위 눈금에 따라 다음 위치를 계산하는 함수
// 주사위를 던져 특정위치에 도착 시 특정 위치로 이동하는 규칙이 있다.
// 해당 함수는 다음 위치를 특정 포지션으로 상승이동 시키는 함수
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

let start = 1; // 시작지점
let next = 1; // 다음위치
let dice = 3; // 주사위 눈금
next = start + nextPosition(start, dice);
console.log("from=", start, ", dice=", dice, ", next=", next);

start = next;
dice = 4;
next = start + nextPosition(start, dice);
console.log("from=", start, ", dice=", dice, ", next=", next);

start = next;
dice = 3;
next = start + nextPosition(start, dice);
console.log("from=", start, ", dice=", dice, ", next=", next);

start = next;
dice = 5;
next = start + nextPosition(start, dice);
console.log("from=", start, ", dice=", dice, ", next=", next);

start = next;
dice = 1;
next = start + nextPosition(start, dice);
console.log("from=", start, ", dice=", dice, ", next=", next);
