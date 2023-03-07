const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

// console.log(input);

let A = +input[0];
let B = +input[1];

let C = A + B;

console.log(C);
