const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

function solution(input) {
  const num = parseInt(input);
  let arr = [0, 1];
  if (num === 0) return 0;
  if (num === 1) return 1;
  let count = 2;
  while (arr.length <= num) {
    let current = arr[count - 2] + arr[count - 1];
    arr.push(current);
    count++;
  }

  return arr[count - 1];
}

console.log(solution(input));
