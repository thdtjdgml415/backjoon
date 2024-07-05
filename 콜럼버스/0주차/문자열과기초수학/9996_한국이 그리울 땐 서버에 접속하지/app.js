const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

/**
 * 문제설명: 패턴에 맞는 문자열은 DA를 출력하고 맞지 않으면 NE를 출력해야함
 * 핵심:  패턴은 알파벳 소문자 여러 개와 별표(*) 하나로 이루어진 문자열이다.
 */

function solution(input) {
  const pattern = input[1]; // 배열에서 패턴 추출
  const charArr = input.slice(2); // 문자열 배열 가져오기
  const regExp = makeRegExp(pattern); // 정규직문자열 생성

  charArr.map((e) => (regExp.test(e) ? console.log("DA") : console.log("NE")));
}
function makeRegExp(pattern) {
  // 패턴에서 * 앞에 .을 붙여서 모든 문자열 탐색할 수 있도록 만듬
  const regexPattern = pattern.replace("*", ".*");
  // 문자열을 정규식으로 인스턴스를 만들기
  const regExp = new RegExp(`^${regexPattern}$`);
  return regExp;
}
solution(input);
