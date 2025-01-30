const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
/**
 * 문제 설명: 좋은단어 찾기 아치형으로 대칭을 이루는 단어가 좋은단어다.
 * 첫줄에 나오는 문자열 수가 주어지고 줄바꿈으로 문자열 수만큼 주어진다.
 *
 * 핵심 : 후입선출(LIFO)
 */

function solution(input) {
  const N = parseInt(input.splice(0, 1), 10); // 첫줄의 나오는 문자열 수 자르기

  let goodWordCount = 0; // 좋은 단어일 경우 저장할 카운트 변수 선언
  for (let i = 0; i < N; i++) {
    // 첫 반복문으로 모든 배열 순회
    let word = input[i]; // 현재 보고있는 문자 저장
    let stack = []; // 스택을 저장 PIEO?

    for (let char of word) {
      // 배열안에 있는 모든 문자열을 순회하기 위해 for of
      if (stack.length > 0 && stack[stack.length - 1] === char) {
        // 스택의 길이가 0보다 클때 즉, 첫 진입시 push하기위한 조건
        // 스택은 후입선출이기때문에 stack의 뒤에 있는 문자열과 현재 순회중이 문자열이 같으면 제거한다.
        stack.pop();
      } else {
        stack.push(char);
      }
    }
    // 아치형을 이룬다면 결국 stack안에 데이터는 남지 않기 때문에 카운트를 증가시킨다.
    if (stack.length === 0) goodWordCount++;
  }
  console.log(goodWordCount);
}
solution(input);
