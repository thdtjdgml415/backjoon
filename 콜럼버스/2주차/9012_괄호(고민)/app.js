const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
function solution(input) {
  const N = parseInt(input.splice(0, 1), 10);

  for (let i = 0; i < N; i++) {
    let words = input[i];
    let isValid = true;
    let stack = [];

    for (let char of words) {
      if (char === "(") {
        stack.push(char);
      } else if (char === ")") {
        if (stack.length === 0) {
          isValid = false;
          break;
        }
        stack.pop();
      }
    }
    if (stack.length !== 0) isValid = false;
    console.log(isValid ? "Yes" : "No");
  }
}
solution(input);
