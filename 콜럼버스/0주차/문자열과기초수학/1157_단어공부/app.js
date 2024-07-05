const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .toLocaleLowerCase()
  .split("");
/**
 * 문제설명: 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 알고리즘
 * 핵심: 대소문자를 구분하지않고 똑같이 취급하는 것
 */
function solution(input) {
  let strObj = countChar(input);
  let result = maxCountCharRes(strObj); // ㅇ
  result.length > 1
    ? console.log("?")
    : console.log(result.join().toLocaleUpperCase());
}
function countChar(input) {
  // 객체로 만들어 문자열을 추출함
  let strObj = {};
  for (let char of input) {
    // 객체로 만들어 문자열의 빈도 수를 카운트
    if (!strObj[char]) {
      // 객체 속에 해당 char가 없다면 1을 입력
      strObj[char] = 1;
    }
    // strObj에 이미 존재한다면 1을 증가
    strObj[char]++;
  }
  return strObj;
}

function maxCountCharRes(strObj) {
  // 객체 속에서 최대빈도 문자 반환
  let result = [];
  let maxCount = 0;
  for (let [str, count] of Object.entries(strObj)) {
    // 객체 strObj를 배열로 만들어 key값과 value를 추출해 순회한다.
    if (count > maxCount) {
      // 최대 값을 뽑아내는 조건문
      maxCount = count;
      result = [str];
    } else if (maxCount === count) {
      // 같다면 배열에 추가
      result.push(str);
    }
  }
  return result;
}

solution(input);
