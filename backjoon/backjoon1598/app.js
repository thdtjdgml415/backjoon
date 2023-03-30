const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

let inputNum = [];
let TopNum = [];
function solution(input) {
  input.map((think) => {
    // inputNum.push(Number(think));
    inputNum.push(findNum(Number(think)));
    TopNum.push(findTop(think));
  });

  let bottom = 0;
  let top = 0;
  if (inputNum[0] - inputNum[1] > 0) {
    bottom = inputNum[0] - inputNum[1];
  } else {
    bottom = -(inputNum[0] - inputNum[1]);
  }
  if (TopNum[0] - TopNum[1] > 0) {
    top = TopNum[0] - TopNum[1];
  } else {
    top = -(TopNum[0] - TopNum[1]);
  }
  console.log(bottom + top);
}

solution(input);

function findNum(a) {
  if ((a - 1) % 4 == 0) {
    return (a - 1) / 4;
  } else if ((a - 2) % 4 == 0) {
    return (a - 2) / 4;
  } else if ((a - 3) % 4 == 0) {
    return (a - 3) / 4;
  } else if ((a - 4) % 4 == 0) {
    return (a - 4) / 4;
  }
}

function findTop(x) {
  if ((x - 1) % 4 == 0) {
    return (x = 1);
  } else if ((x - 2) % 4 == 0) {
    return (x = 2);
  } else if ((x - 3) % 4 == 0) {
    // console.log(x);
    return (x = 3);
  } else if ((x - 4) % 4 == 0) {
    return (x = 4);
  }
}
