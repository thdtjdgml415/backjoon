const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

function solution() {
  let a = input.split("\n").map((e) => {
    return e;
  });

  let f = a[1].split("").map((e, i) => {
    let c = 0;
    return (c += Number(e));
  });

  let g = f.reduce((acc, cur) => {
    return acc + cur;
  });
  console.log(g);
}
solution();
