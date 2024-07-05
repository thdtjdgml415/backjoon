const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  findPerfectNum(input);
}

function findPerfectNum(input) {
  for (let i = 0; i < input.length - 1; i++) {
    let current = Number(input[i]);
    let total = 0;
    let measure = [];

    for (let j = 1; j <= Number(input[i] - 1); j++) {
      if (Number(current) % j === 0) {
        total += j;
        measure.push(j);
        measure.push("+");
      }
    }
    if (total !== current) {
      console.log(`${current} is NOT perfect.`);
    } else {
      console.log(`${current} = ${measure.join(" ").slice(0, -1)}`);
    }
  }
}
solution(input);
