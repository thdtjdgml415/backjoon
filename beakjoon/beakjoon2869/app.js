const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a, b, v] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

function solution(a = Number(a), b = Number(b), v = Number(v)) {
  let full_days = Math.ceil((v - a) / (a - b));
  return full_days + 1;
}

console.log(solution(a, b, v));
