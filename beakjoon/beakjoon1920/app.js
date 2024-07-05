const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let arr1 = new Set(input[1].split(" "));
  let arr2 = input[3].split(" ");

  let stack = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.has(arr2[i])) {
      stack.push(1);
    } else stack.push(0);
  }
  return stack;
}
console.log(solution(input).join("\n"));
