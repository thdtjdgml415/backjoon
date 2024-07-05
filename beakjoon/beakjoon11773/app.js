const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(arr) {
  let stack = [];
  let result = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 0) {
      let num = stack.pop();
      result = result - num;
    } else {
      stack.push(arr[i]);
      result = result + arr[i];
    }
  }

  return result;
}

console.log(solution(input));
