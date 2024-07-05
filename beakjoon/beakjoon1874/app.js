const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  // 첫 배열 정수
  const n = parseInt(input[0]);
  const sequence = input.slice(1).map(Number);

  let stack = [];
  let result = [];
  let currentNumber = 1;

  for (let i = 0; i < n; i++) {
    // 목표 정수
    let target = sequence[i];

    while (currentNumber <= target) {
      stack.push(currentNumber);
      result.push("+");
      currentNumber++;
    }

    if (stack[stack.length - 1] === target) {
      stack.pop();
      result.push("-");
    } else {
      console.log("NO");
      return;
    }
  }
  console.log(result.join("\n"));
}

solution(input);
