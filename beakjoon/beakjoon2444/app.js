const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");
const n = parseInt(input);

// 별찍기

let str = [];
for (let a = 1; a <= n; a++) {
  for (let b = 1; b < n + a; b++) {
    if (b <= n - a) {
      str += " ";
    } else {
      str += "*";
    }
  }
  str += "\n";
}

for (let a = n; a > 1; a--) {
  for (let b = 1; b < n + a - 1; b++) {
    if (b <= n - a + 1) {
      str += " ";
    } else {
      str += "*";
    }
  }
  str += "\n";
}
console.log(str);
