const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let divisor = [];
  // console.log(input);
  let result = input.map((el) => {
    return el.replace(/\r/g, "");
  });
  // console.log(result[1].split(" "));
  divisor = result[1].split(" ");
  // console.log(Math.max(...divisor));
  if (divisor.length <= 1) {
    console.log(divisor[0] * divisor[0]);
  } else {
    console.log(Math.max(...divisor) * Math.min(...divisor));
  }
}

solution(input);
