const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

/**
 * 문제설명 : 2중 배열이 존재한다. 이중 배열을
    A A B C D D
    a f z z
    0 9 1 2 1
    a 8 E W g 6
    P 5 h 3 k x
    이렇게 존재하는 문자열을 세로로 읽어서 문자열로 반환하는 문제

    핵심 :  가로 길이중에 최고 길이를 찾고 이중 반복문을 사용해서 문자가 없을 때를 예외처리 해야함
 */

function solution(input) {
  let result = "";
  // 주어진 문자열을 \n 개행문자를 이용해 줄바꿈을 기준으로 배열로 만들어 스프레드 문법을 사용해 각 이중 배열로 되어있는 input안에 배열들 중 가장 긴 길이를 반환한다.
  const arrLength = Math.max(...input.map((e) => e.length));
  // 이중 반복문을 사용하고 모든 배열은 완전 탐색하기 위해서 arrLength를 사용한다.
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < input.length; j++) {
      // input[j][i]를 사용해 세로로 배열을 순회하고 문자가 없을때는 undefined가 반환되기 때문에 그때는 빈문자열을 넣는다.
      result += input[j][i] !== undefined ? input[j][i] : "";
    }
  }
  console.log(result);
}
solution(input);
