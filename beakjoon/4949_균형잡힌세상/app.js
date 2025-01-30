const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  // console.log(input);
  // 반복문을 통해 배열 순회
  for (let i = 0; i < input.length; i++) {
    // stack 채울 곳
    let stack = [];
    // input에서 현재 순회중인 문자열
    let current = input[i];

    for (let j = 0; j < current.length; j++) {
      if (input[i][j] === "(" || input[i][j] === "[") {
        stack.push(input[i][j]);
      } else if (input[i][j] === "]" || input[i][j] === "]") {
        stack.pop();
      }
    }
    console.log(stack.length);
  }
}

solution(input);
