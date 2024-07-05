const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [M, N] = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(m, n) {
  let min = Number(m);
  let max = Number(n);
  let divisorArr = [];
  let divisorTotal = 0;
  for (let i = min; i <= max; i++) {
    let current = i;
    let divisor = [];
    for (let j = 1; j <= current; j++) {
      if (i % j === 0) {
        divisor.push(j);
      }
    }
    if (divisor.length === 2) {
      divisorArr.push(current);
      divisorTotal = divisorTotal + current;
    }
  }
  if (divisorArr.length === 0) {
    return -1;
  }
  return `${divisorTotal}\n${Math.min(...divisorArr)}`;
}

console.log(solution(M, N));
