const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let arr = input.slice(1).map(Number);

arr.sort((a, b) => a - b);

console.log(arr.join("\n"));
