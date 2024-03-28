const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const maxLength = Math.max(...input.map((i) => i.length));

let a = "";
for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    a += input[j][i] !== undefined ? input[j][i] : "";
  }
}
console.log(a);
