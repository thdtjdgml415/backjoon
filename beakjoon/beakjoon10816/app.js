const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
  const N = parseInt(arr[0]);
  const cards = arr[1].split(" ").map(Number);
  const M = parseInt(arr[2]);
  const queries = arr[3].split(" ").map(Number);
  let cardCounts = {};

  for (let card of cards) {
    if (cardCounts[card]) {
      cardCounts[card]++;
    } else {
      cardCounts[card] = 1;
    }
  }

  const result = queries.map((qeury) => cardCounts[qeury] || 0);
  console.log(result.join(" "));
}
solution(input);
