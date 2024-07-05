const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

function solution(input) {
  const num = parseInt(input);
  let result = 1;
  for (let i = num; i > 0; i--) {
    result = result * i;
  }
  return result;
}
console.log(solution(input));

// 재귀
// function solution(input) {
//   const num = parseInt(input);
//   let result = 1;
//   function recursive(num, result) {
//     if (num === 1) return result;
//     result = result * num;
//     return recursive(num - 1, result);
//   }
//   return recursive(num, result);
// }
