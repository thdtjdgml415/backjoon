const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = parseInt(input[0], 10); // 첫 번째 줄: 카드의 개수
  const A = input[1].split(" ").map(Number); // 두 번째 줄: 기술 순서

  let deque = [];

  for (let i = N; i >= 1; i--) {
    const technique = A[i - 1];
    if (technique === 1) {
      deque.unshift(i);
    } else if (technique === 2) {
      deque.splice(1, 0, i);
    } else if (technique === 3) {
      deque.push(i);
    }
  }

  console.log(deque.join(" "));
}

solution(input);
