const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
/**
 * 문제설명: 2진수가 주어졌을 때, 8진수로 변환하는 프로그램을 작성하시오
 *  2
 */
function solution(input) {
  let result = "";

  const paddedInput =
    input.length % 3 === 0 ? input : "0".repeat(3 - (input.length % 3)) + input;

  for (let i = 0; i < paddedInput.length; i += 3) {
    let num = paddedInput.slice(i, i + 3);

    let changeNum = parseInt(num, 2).toString(8);

    result += changeNum;
  }
  console.log(result);
}

solution(input);
