const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let input = require("fs").readFileSync(filePath).toString().trim();
const num = Number(5);
function solution(nu) {
  const answer = [];
  for (let i = 1; i <= nu; i++) {
    answer.push([]);
    for (let j = 1; j <= nu - i; j++) {
      answer[i - 1].push(` `);
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      answer[i - 1].push(`*`);
    }
  }
  console.log(answer.map((e) => e.join("")).join("\n"));
}

solution(num);

/**

 */
