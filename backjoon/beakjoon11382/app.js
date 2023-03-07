const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

function solution() {
  console.log(+input[0] + +input[1] + +input[2]);
}
solution();
