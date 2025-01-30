const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = input.length;
  const arr = input.map(Number);

  let visible = [];
  let maxCount = 0;
  for (let i = N - 1; i > 0; i--) {
    let currentH = arr[i];

    if (currentH > maxCount) {
      visible.push(currentH);
      maxCount = currentH;
    }
  }
  console.log(visible.length);
}

solution(input);
