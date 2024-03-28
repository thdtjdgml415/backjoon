const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

function solution(str) {
  // 크로아티아 알파벳 목록
  // console.log(str);
  let result = 0;
  const croatianAlphabets = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  let count = 0; // 크로아티아 알파벳 개수를 세기 위한 변수
  for (let i = 0; i < str.length; i++) {
    // 현재 위치에서 시작하는 부분 문자열이 크로아티아 알파벳 중 하나인지 확인
    let isCroatianAlphabet = false;
    for (let ca of croatianAlphabets) {
      if (str.substr(i, ca.length) === ca) {
        // console.log("char", str.substr(i, ca.length));
        count++; // 크로아티아 알파벳을 찾았으므로 count를 증가
        i += ca.length - 1; // 찾은 알파벳의 길이만큼 인덱스를 이동
        isCroatianAlphabet = true; // 크로아티아 알파벳을 찾았음을 표시
        break; // 더 이상의 확인이 필요 없으므로 내부 반복문 탈출
      }
    }
    if (!isCroatianAlphabet) {
      count++; // 크로아티아 알파벳이 아니라면 일반 알파벳으로 취급하여 count 증가
    }
  }
  result = count;
  console.log(result);
}
solution(input);
