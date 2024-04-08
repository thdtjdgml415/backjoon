const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let [a, b] = input.shift();

let arr = new Array(a).fill().map(() => new Array(b).fill(0));

for (let i = 0; i < a; i++) {
  for (let j = 0; j < b; j++) {
    arr[i][j] += input[i][j] + input[i + a][j];
  }
}
let answer = "";
for (let i = 0; i < a; i++) {
  for (let j = 0; j < b; j++) {
    answer += arr[i][j] + " ";
  }
  answer += "\n";
}
console.log(answer.trim());
