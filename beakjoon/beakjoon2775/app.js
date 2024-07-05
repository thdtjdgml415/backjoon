const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
  let num = parseInt(arr[0]);
  let home = arr.slice(1).map(Number);
  let index = 0;

  const results = [];

  for (let i = 0; i < num; i++) {
    // 층
    let k = home[index];
    // 호
    let n = home[index + 1];
    // 다음 층, 호
    index += 2;

    // 층, 호에 따라 채운 아파트 2차원 배열 생성
    let dp = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

    // 0층 초기화
    for (let i = 1; i <= n; i++) {
      dp[0][i] = i;
    }

    for (let i = 1; i <= k; i++) {
      for (let j = 1; j <= n; j++) {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      }
    }
    console.log(dp[k][n]);
  }
}
solution(input);
