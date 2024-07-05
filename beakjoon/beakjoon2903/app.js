const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

function solution(input) {
  let num = Number(input);

  let dot = clac(num);
  console.log(dot * dot);
}

function clac(num) {
  let dot = 2;
  let count = 0;
  while (count < num) {
    dot = dot * 2 - 1;
    count++;
  }
  return dot;
}
solution(input);
