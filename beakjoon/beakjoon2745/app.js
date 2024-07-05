const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [char, num] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");
let number = parseInt(char, Number(num));
console.log(number);
