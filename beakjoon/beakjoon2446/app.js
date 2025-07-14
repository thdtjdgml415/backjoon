const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let input = require("fs").readFileSync(filePath).toString().trim();
const num = Number(5);
function solution(nu) {
  let answer = "";
  for (let i = 0; i < nu; i++) {
    if (i !== 0) {
      answer += "\n";
    }
    for (let j = 0; j < i; j++) {
      answer += " ";
    }
    for (let k = 0; k < nu * 2 - (2 * i + 1); k++) {
      answer += "*";
    }
  }

  for (let i = 0; i < nu; i++) {
    if (i !== nu) {
      answer += "\n";
    }
    for (let j = 1; j < nu - i; j++) {
      answer += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      answer += "*";
    }
  }
  console.log(answer);
  // console.log(answer.map((v) => v.join("")).join("\n"));
}

solution(num);

/**

 */
