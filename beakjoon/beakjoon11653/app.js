const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let num = require("fs").readFileSync(filePath).toString().trim();

function factorization(num) {
  let divisor = Number(num);
  let current = 2;

  let factorArr = [];
  while (current * current <= divisor) {
    while (divisor % current === 0) {
      divisor /= current;
      factorArr.push(current);
    }
    current++;
  }
  // 마지막 남은 수가 소수인 경우
  if (divisor > 1) {
    factorArr.push(divisor);
  }

  return factorArr;
}

factorization(num).map((el) => {
  console.log(el);
});
