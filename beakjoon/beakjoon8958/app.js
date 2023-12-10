const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let arrNum = Number(input[0]);

for (let i = 1; i < arrNum + 1; i++) {
  let count = 0;
  let num = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] == "O") count++;
    else count = 0;
    num += count;
  }
  console.log(num);
}
