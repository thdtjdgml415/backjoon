/**
 * 문제설명: <...> 안에 문자들은 그대로 출력하고 나머지 문자들은 공백을 기준으로 뒤집어서 출력한다.
 *  조건
 *  1. 알파벳 소문자('a'-'z'), 숫자('0'-'9'), 공백(' '), 특수 문자('<', '>')로만 이루어져 있다.
    2. 문자열의 시작과 끝은 공백이 아니다.
    3. '<'와 '>'가 문자열에 있는 경우 번갈아가면서 등장하며, '<'이 먼저 등장한다. 또, 두 문자의 개수는 같다.
 */

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

function solution(input) {
  let result = "";
  let buffer = ""; // 태그 밖 문자열 저장
  let inTag = false; // 태그 상태를 구분해 줄 플래그
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (char === "<") {
      // 처음 만나는 "<" 말고 그 다음 뒤에서 부터 만나는 "<" 부터는 이미 태그 밖 문자열을 지나왔기 때문에 buffer에 문자가 존재하면 뒤집어준다.
      if (buffer.length > 0) {
        result += buffer.split("").reverse().join("");
        buffer = "";
      }
      // 첫 "<"는 buffer에 문자가 없기 때문에 그대로 result에 추가해도 상관없다.
      inTag = true;
      result += char;
    } else if (char === ">") {
      // ">"는 태그 밖으로 빠져나가는 시작이기 떄문에 이때 inTag플래그를 false로 만들고 result에 그대로 추가한다.
      inTag = false;
      result += char;
    } else if (inTag) {
      // "<>" 안에 존재하는 태그는 그대로 넣어도 상관없기 떄문에 조건 추가
      result += char;
    } else {
      // 태그 밖에서 공백을 기준으로 뒤집기떄문에 공백을 만날 시 뒤집어 준다.
      if (char === " ") {
        // join시 문자열이 붙어버리기 때문에 + " "을 추가해 공백을 넣는다.
        result += buffer.split("").reverse().join("") + " ";
        buffer = "";
      } else {
        buffer += char;
      }
    }
  }

  // 태그가 다끝나고 뒤에 문자열이 남아 있을 수 있기 때문에 buffer에 남아있는 문자열을 뒤집어서 추가해준다.
  if (buffer.length > 0) {
    result += buffer.split("").reverse().join("");
    buffer = "";
  }
  console.log(result);
}
solution(input);
