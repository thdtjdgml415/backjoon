const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .toLocaleLowerCase()
//   .split(" ")
//   .map(Number);

function solution(input) {
  const M = 3;
  const N = 16;
  const isPrime = Array(N + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i <= N; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= N; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const result = [];
  for (let i = M; i <= N; i++) {
    if (isPrime[i]) {
      result.push(i);
    }
  }

  return result;
}

const findPrime = solution(["3", "16"]);
console.log(findPrime.join("\n"));
