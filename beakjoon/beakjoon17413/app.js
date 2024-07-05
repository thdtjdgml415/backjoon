const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

function solution(str) {
  //결과 문자 저장
  let result = "";
  // 현재 단어를 저장할 변수
  let words = "";
  // 태그 안에 문자인지 확인하느 플래그
  let inTag = false;

  for (let char of str) {
    if (char === "<") {
      // <로 다시 시작할때 words가 존재하면 뒤집고 결과에 추가
      if (words) {
        result += words.split("").reverse().join("");
        words = "";
      }
      inTag = true;
      result += char;
    } else if (char === ">") {
      inTag = false;
      result += char;
    } else if (inTag) {
      result += char;
    } else if (char === " ") {
      result += words.split("").reverse().join("") + " ";
      words = ""; // word 초기
    } else {
      words += char;
    }
  }
  if (words) {
    result += words.split("").reverse().join(""); // 남아 있는 단어를 뒤집어서 result에 추가
  }
  return result; // 최종 결과 문자열 반환
}

console.log(solution(input));
