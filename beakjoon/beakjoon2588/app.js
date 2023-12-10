const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// console.log(input);
function solution() {
  let A = +input[0];
  let B = +input[1];
  let b = B.toString().split("");
  for (let i = 2; i >= 0; i--) {
    let C = A * b[i];
    console.log(C);
  }
  let D = A * B;
  console.log(D);
  //   console.log(A, b);
}
solution();
