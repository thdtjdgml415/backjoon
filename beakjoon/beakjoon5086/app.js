const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let arr = [];
  let result = [];
  for (let i = 0; i < input.length; i++) {
    arr.push(input[i].split(" "));
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      Number(arr[i][0]) > Number(arr[i][1]) &&
      Number(arr[i][0]) % Number(arr[i][1]) === 0
    ) {
      result.push("multiple");
    } else if (
      Number(arr[i][0]) < Number(arr[i][1]) &&
      Number(arr[i][1]) % Number(arr[i][0]) === 0
    ) {
      result.push("factor");
    } else {
      result.push("neither");
    }
  }
  return result;
}
console.log(solution(input).join("\n"));
