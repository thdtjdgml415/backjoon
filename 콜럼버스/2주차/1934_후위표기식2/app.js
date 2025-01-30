const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
/**
 * 문제설명: 영어대소문자와 후위 표기식으로 주어진 식을 그에 대응하는 수로 계산하는 식을 구하시오!
 * 핵심 후위표기식에 대해 알아야하고 스택으로 흐름파악 그리고 대응하는 값 키와 value지정
 */

function solution(input) {
  const N = parseInt(input.slice(0, 1), 10);
  const expression = input[1];
  const values = input.slice(2, 2 + N).map(Number);

  let valuesObj = {};
  // 아스키 코드로 변환해 문자열을 순회화면서 values에 입력
  for (let i = 0; i < N; i++) {
    valuesObj[String.fromCharCode(65 + i)] = values[i];
  }

  let stack = [];
  for (let char of expression) {
    if (/[A-Z]/.test(char)) {
      // 피연산자이면 스택에 값을 넣는다
      stack.push(valuesObj[char]);
    } else {
      // 연산자를 만나면 피연산자를 스택에서 꺼내 계산한다
      const b = stack.pop();
      const a = stack.pop();
      let result;
      switch (char) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = a / b;
          break;
      }
      stack.push(result);
    }
  }
  // 고정소수점 toFixed를 활용해 입력
  console.log(stack.pop().toFixed(2));
}

solution(input);
