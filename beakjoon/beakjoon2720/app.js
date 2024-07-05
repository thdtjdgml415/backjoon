const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const QUARTER = 25;
const DIME = 10;
const NICKEL = 5;

function solution(input) {
  let [arr, num] = makeNumArr(input);
  calculate(arr, num);
}

function makeNumArr(input) {
  let arr = [];
  let num = Number(input[0]);
  for (let i = 1; i < input.length; i++) {
    arr.push(Number(input[i]));
  }
  return [arr, num];
}

function calculate(arr, num) {
  let calc = [];
  for (let i = 0; i < num; i++) {
    calc.push(restCalc(arr[i]));
  }
  for (let result of calc) {
    console.log(result.join(" "));
  }
}

function restCalc(amount) {
  let rest = [];

  let quarterCount = Math.floor(amount / QUARTER);
  amount %= QUARTER;

  let dimeCount = Math.floor(amount / DIME);
  amount %= DIME;

  let nickelCount = Math.floor(amount / NICKEL);
  amount %= NICKEL;

  let pennyCount = amount; // 나머지

  rest.push(quarterCount, dimeCount, nickelCount, pennyCount);

  return rest;
}
solution(input);
