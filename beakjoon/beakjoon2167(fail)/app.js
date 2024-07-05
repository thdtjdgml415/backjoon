const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
function parseInput(input) {
  console.log("기본 입력값", input);
  const [N, M] = input[0].split(" ").map(Number);
  const matrix = [];
  for (let i = 1; i <= N; i++) {
    matrix.push(input[i].split(" ").map(Number));
  }

  const K = parseInt(input[N + 1]);
  const qeuries = [];
  for (let k = 0; k < K; k++) {
    qeuries.push(input[N + 2 + k].split(" ").map(Number));
  }

  return { N, M, matrix, qeuries };
}

function computePrefixSum(N, M, matrix) {
  const prefixSum = Array.from(Array(N + 1), () => Array(M + 1).fill(0));
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      prefixSum[i][j] =
        matrix[i - 1][j - 1] +
        prefixSum[i - 1][j] +
        prefixSum[i][j - 1] -
        prefixSum[i - 1][j - 1];
    }
  }
  return prefixSum;
}

function querySum(prefixSum, i, j, x, y) {
  console.log(x, y);
  return (
    prefixSum[x][y] -
    prefixSum[i - 1][y] -
    prefixSum[x][j - 1] +
    prefixSum[i - 1][j - 1]
  );
}

function main(input) {
  const { N, M, matrix, qeuries } = parseInput(input);
  console.log(N, M, matrix, qeuries);
  const prefixSum = computePrefixSum(N, M, matrix);
  console.log("prefixSum", prefixSum);
  const results = qeuries.map(([i, j, x, y]) =>
    querySum(prefixSum, i, j, x, y)
  );
  console.log("result", results);
}
main(input);
