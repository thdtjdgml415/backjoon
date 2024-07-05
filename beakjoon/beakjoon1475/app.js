const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("")
  .map(Number);

function solution(arr) {
  let numbers = Array(10).fill(0);
  let sixNineCount = 0;

  for (let i of arr) {
    if (i === 9 || i === 6) {
      sixNineCount++;
    } else {
      numbers[i]++;
    }
  }

  // 6과 9의 개수를 합쳐서 필요한 최소 슬롯 개수를 계산
  numbers[6] = Math.ceil(sixNineCount / 2);

  // 가장 큰 값을 찾아서 반환
  const maxValue = Math.max(...numbers);
  return maxValue;
}

console.log(solution(input));
