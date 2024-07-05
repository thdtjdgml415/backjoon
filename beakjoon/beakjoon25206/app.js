const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function splitArr(input) {
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    arr.push(input[i].split(" "));
  }
  return arr;
}

function solution(input) {
  let total = 0;
  let majorNum = 0;
  let arr = splitArr(input);
  arr.forEach((e) => {
    if (e[2] === "A+") {
      total += e[1] * 4.5;
      majorNum += Number(e[1]);
    } else if (e[2] === "A0") {
      total += e[1] * 4.0;
      majorNum += Number(e[1]);
    } else if (e[2] === "B+") {
      total += e[1] * 3.5;
      majorNum += Number(e[1]);
    } else if (e[2] === "B0") {
      total += e[1] * 3.0;
      majorNum += Number(e[1]);
    } else if (e[2] === "C+") {
      total += e[1] * 2.5;
      majorNum += Number(e[1]);
    } else if (e[2] === "C0") {
      total += e[1] * 2.0;
      majorNum += Number(e[1]);
    } else if (e[2] === "D+") {
      total += e[1] * 1.5;
      majorNum += Number(e[1]);
    } else if (e[2] === "D0") {
      total += e[1] * 1.0;
      majorNum += Number(e[1]);
    } else if (e[2] === "F") {
      total += e[1] * 0;
      majorNum += Number(e[1]);
    } else if (e[2] === "P") {
      total += 0;
    }
  });
  console.log(total / majorNum);
}

solution(input);
// "A+"	 "4.5"
// "A0"	 "4.0"
// "B+"	 "3.5"
// "B0"	 "3.0"
// "C+"	 "2.5"
// "C0"	 "2.0"
// "D+"	 "1.5"
// "D0"	 "1.0"
// "F" "0.0"
