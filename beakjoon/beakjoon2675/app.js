const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// console.log(input);
function solution(props) {
  props.map((e) => {
    // console.log(e);
    divide(e);
  });
}

function divide(line) {
  let a = line.split(" ");
  // console.log("a", a);
  if (a[1]) {
    overlap(a[0], a[1]);
  } else {
    return "";
  }
}

function overlap(num, char) {
  // console.log("char", num, char);
  let result = "";
  char.split("").map((el) => {
    // console.log(el);
    for (let i = 0; i < num; i++) {
      result += el;
    }
  });
  console.log(result);
}
solution(input);
