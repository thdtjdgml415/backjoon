const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("");
let alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let x = [];

function solution() {
  for (let i = 97; i <= 122; i++) {
    console.log(String.fromCharCode(i));
    x.push(input.indexOf(String.fromCharCode(i)));
  }
  console.log(x.join(" "));
  // alpha.map((e) => {
  //   x.push(input.indexOf(e));
  // });
  // console.log(x.join(" "));
}
solution();
