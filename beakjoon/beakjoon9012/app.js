const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let result = [];
  for (let i = 1; i <= input[0]; i++) {
    let stack = [];
    let isVaild = true;
    let current = input[i];
    for (let j = 0; j < current.length; j++) {
      let str = current[j];
      if (str === "(") {
        stack.push("(");
      } else {
        if (stack.length === 0) {
          isVaild = false;
          break;
        }
        stack.pop();
      }
    }
    if (stack.length === 0 && isVaild) {
      result.push("YES");
    } else {
      result.push("NO");
    }
  }
  return result;
}

console.log(solution(input).join("\n"));
