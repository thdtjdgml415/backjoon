const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

// console.log(input);
function solution() {
  let A = +input[0];
  let B = +input[1];
  let C = +input[2];

  let a = (A + B) % C;
  let b = ((A % C) + (B % C)) % C;
  let c = (A * B) % C;
  let d = ((A % C) * (B % C)) % C;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}
solution();
