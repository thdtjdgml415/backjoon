/**
 * 문제설명:
 *
 */

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const NUM = Number(input[0]);
  let extensionCount = {};

  for (let i = 1; i <= NUM; i++) {
    let fileName = input[i];
    let ext = fileName.substring(fileName.lastIndexOf(".") + 1);

    if (extensionCount[ext]) {
      extensionCount[ext]++;
    } else {
      extensionCount[ext] = 1;
    }
  }

  let sortedExtensions = Object.keys(extensionCount).sort();

  sortedExtensions.forEach((ext) => {
    console.log(`${ext} ${extensionCount[ext]}`);
  });
}

solution(input);
