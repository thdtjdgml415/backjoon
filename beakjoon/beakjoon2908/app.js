const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

function solution(props) {
  // console.log(props);
  let s = props.map((el, i) => {
    let a = el.split("").reverse();

    x = a.join("");
    return x;
  });
  // console.log("s", s);
  Number(s[0]) > Number(s[1]) ? console.log(s[0]) : console.log(s[1]);
}
solution(input);
