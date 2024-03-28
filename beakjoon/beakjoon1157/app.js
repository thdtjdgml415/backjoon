const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

let str = input.toUpperCase().split("");
// console.log(str);

const result = str.reduce((accu, curr) => {
  //   console.log("1", accu, "2", curr, "3", accu[curr]);
  accu[curr] = (accu[curr] || 0) + 1;
  return accu;
}, {});

let count = 0;
let a = "";
// console.log(result);
for (char in result) {
  //   console.log(char, count);
  if (result[char] > count) {
    count = result[char];
    a = char;
  } else if (result[char] === count) {
    a = "?";
  }
}
console.log(a);
