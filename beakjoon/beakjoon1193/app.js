const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

function solution(X = Number(input)) {
  let diagonal = 1;
  let sum = 1;
  let [top, bottom] = findDiagonal(diagonal, sum, X);

  console.log(top + "/" + bottom);
}

function findDiagonal(diagonal, sum, X) {
  // 몇 번째 대각선에 있는지 찾기
  while (sum < X) {
    diagonal++;
    sum += diagonal;
  }
  let positionInDiagonal = X - (sum - diagonal);
  return findFraction(positionInDiagonal, diagonal);
}

function findFraction(positionInDiagonal, diagonal) {
  let top, bottom;

  if (diagonal % 2 === 0) {
    top = positionInDiagonal;
    bottom = diagonal - positionInDiagonal + 1;
  } else {
    top = diagonal - positionInDiagonal + 1;
    bottom = positionInDiagonal;
  }
  return [top, bottom];
}

solution(input);
