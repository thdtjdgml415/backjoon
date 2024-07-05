const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

function solution(input) {
  const num = Number(input);

  let queue = Array.from({ length: num }, (_, i) => i + 1);
  let front = 0;
  let jump = num;

  while (jump - front > 1) {
    front++;
    queue[jump++] = queue[front++];
  }
  return queue[front];
}
console.log(solution(input));
