const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, K] = require("fs").readFileSync(filePath).toString().trim().split(" ");

// console.log(input);
function solution(N = Number(N), K = Number(K)) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) result.push(i);
  }
  if (result.length < K) return 0;
  return result[K - 1];
}
console.log(solution(N, K));
