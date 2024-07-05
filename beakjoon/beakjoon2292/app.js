const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

function solution(input) {
  let num = Number(input);
  if (num === 1) return 1;
  let room = 1;
  let step = 1;

  while (room < num) {
    room += 6 * step;
    step++;
  }
  return step;
}
console.log(solution(input));
