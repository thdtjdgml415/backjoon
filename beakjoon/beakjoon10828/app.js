const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
  let stack = [];
  let output = [];
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i].split(" ");
    // console.log(current);
    if (current[0] === "push") {
      stack.push(current[1]);
    } else if (current[0] === "top") {
      if (stack.length === 0) {
        output.push(-1);
      } else {
        output.push(stack[stack.length - 1]);
      }
    } else if (current[0] === "size") {
      output.push(stack.length);
    } else if (current[0] === "empty") {
      if (stack.length === 0) {
        output.push(1);
      } else output.push(0);
    } else if (current[0] === "pop") {
      if (stack.length === 0) {
        output.push(-1);
      } else output.push(stack.pop());
    }
  }
  console.log(output.join("\n"));
}

solution(input);
