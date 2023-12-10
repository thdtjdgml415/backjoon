const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("");

// console.log(input);
function solution() {
  let A = input + "??!";
  console.log(A.replace(/,/g, ""));
}
solution();
