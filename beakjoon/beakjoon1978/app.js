const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let arr = input[1].split(" ");
  let count = 0;
  arr.forEach((el, index) => {
    let divisor = [];
    let current = el;
    for (let i = 1; i <= current; i++) {
      if (current % i === 0) {
        divisor.push(i);
      }
    }
    if (divisor.length === 2) {
      count++;
    }
  });
  return count;
}
console.log(solution(input));
