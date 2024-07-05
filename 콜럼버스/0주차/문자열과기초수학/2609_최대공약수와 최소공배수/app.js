/**
 * 문제설명: 두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.
 * 핵심: 최대공약수와 최소공배수에 대해 알기
 */

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(input) {
  // 받은 두 수를 숫자로 변환해서 변수에 할당
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);

  let gcdValue = gcd(num1, num2);
  console.log(gcdValue);
  let lcmValue = lcm(num1, num2, gcdValue);
  console.log(lcmValue);
}

// 유클리드 호제법 사용
function gcd(x, y) {
  // (x, y)가 있을 때 x를 y로 나눈 나머지 r1을 구하고 y를 r1으로 구한 나머지를 구한다.
  // 이런 방식으로 나누어 떨어질때 까지 구했을 때 변수 x에 있는 값이 최대공약수
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

function lcm(num1, num2, gcdValue) {
  // 정수 (num1 * num2)는 최대공약수 * 최소공배수와 같다
  let lcmValue = 0;
  lcmValue = (num1 * num2) / gcdValue;
  return lcmValue;
}

solution(input);
