const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function removeNum(stringArr) {
  let arr = [];
  for (let i = 1; i < stringArr.length; i++) {
    arr.push(input[i]);
  }
  return arr;
}

function solution(props) {
  let arr = removeNum(props);
  let count = arr.length;

  let temp = "";
  arr.forEach((e) => {
    temp = e[0];
    for (let i = 1; i < e.length; i++) {
      if (temp.includes(e[i]) && e[i] !== e[i - 1]) {
        count--;
        break;
      }
      temp += e[i];
    }
  });
  return count;
}
console.log(solution(input));
