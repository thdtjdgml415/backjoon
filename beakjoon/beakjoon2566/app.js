const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let a = [];
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    a.push(input[i][j]);
  }
}

let max = Math.max(...a);
let arr1 = "";
let arr2 = "";
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (max === input[i][j]) {
      arr1 += i + 1;
      arr2 += j + 1;
      console.log(max.toString() + "\n" + arr1 + " " + arr2);
      return;
    }
  }
}
