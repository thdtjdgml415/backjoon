const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function makeArr(input) {
  let arr = [];
  for (let i = 1; i <= input[0]; i++) {
    arr.push(input[i].split(" "));
  }

  for (let i = 0; i <= input[0] - 1; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Number(arr[i][j]);
    }
  }
  return arr;
}

function solution(input) {
  let a = makeArr(input);

  const paperSize = 100;
  const patchSize = 10;
  const paper = Array.from(Array(paperSize), () => Array(paperSize).fill(0));
  // console.log("paper", paper);

  // 각 색종이의 위치를 2차원 배열에 표시
  for (let i = 0; i < input[0]; i++) {
    const [x, y] = a[i];
    for (let dx = 0; dx < patchSize; dx++) {
      for (let dy = 0; dy < patchSize; dy++) {
        paper[x + dx][y + dy] = 1;
      }
    }
  }

  // 검은 영역의 넓이를 계산
  let blackArea = 0;
  for (let i = 0; i < paperSize; i++) {
    for (let j = 0; j < paperSize; j++) {
      if (paper[i][j] === 1) {
        blackArea++;
      }
    }
  }
  console.log(blackArea);
}

solution(input);
