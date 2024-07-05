const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

let num = Number(input[0]).toString(Number(input[1]));

console.log(num.toUpperCase());
