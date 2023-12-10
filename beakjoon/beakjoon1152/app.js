/**
 * 빈 문자열이 주어질때 0을 반환해야한다.
 */

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

// console.log(input);
function solution(props) {
  if (props === "") {
    console.log(0);
  } else {
    console.log(props.split(" ").length);
  }
}
solution(input);
