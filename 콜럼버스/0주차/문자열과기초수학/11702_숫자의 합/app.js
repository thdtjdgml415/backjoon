const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

/**
 * 문제설명 : 문자열의 갯수와 문자열로 이루어진 배열이 존재함 문자열을 숫자 배열로 만들어 다 더하기
 * 핵심 : 문자열을 순회하며 숫자로 변경해 충첩해서 더하기
 */

function solution(input) {
  const LENGTH = Number(input[0]); // 길이 값만 따로 정수로 만들어 저장
  const arr = input[1].split("").map(Number); // 문자열을 쪼개서 배열로 만들고 숫자로 변환해 저장
  let result = 0; // 중첩해서 더한 결과 값을 저장하기 위해 변수 선언

  for (let i = 0; i < LENGTH; i++) {
    // 배열을 순회하고 arr 배열을 순회하면서 해당 인덱스에 있는 값을 중첩해 result에 저장한다.
    result += arr[i];
  }

  console.log(result);
}
solution(input);
