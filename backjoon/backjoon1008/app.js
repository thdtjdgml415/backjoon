const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

// console.log(input);

let sad = +input[0];
let smile = +input[1];

let good = sad / smile;

console.log(good);
