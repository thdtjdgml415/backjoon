const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("");

function solution(props) {
  for (let i = 0; i < Math.floor(props.length); i++) {
    if (props[i] !== props[props.length - i - 1]) {
      return console.log("0");
    }
  }
  console.log("1");
}
solution(input);
