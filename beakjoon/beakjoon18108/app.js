const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

function solution() {
  let A = input;
  let a = A - 543;
  console.log(a);
}
solution();
