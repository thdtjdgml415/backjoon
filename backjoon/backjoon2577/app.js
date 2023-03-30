const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let NumArr = [];
  input.map((el) => {
    NumArr.push(parseInt(el));
  });
  // console.log(NumArr);
  let result = (NumArr[0] * NumArr[1] * NumArr[2]).toString();
  // console.log(result);
  findNum(result);
}

solution(input);

function findNum(e) {
  let news = [];
  let one = 0;
  let two = 0;
  let three = 0;
  let four = 0;
  let f = 0;
  let s = 0;
  let h = 0;
  let x = 0;
  let j = 0;
  let z = 0;
  news = e.split("");
  for (let i = 0; i < news.length; i++) {
    // console.log(news[i]);
    if (news[i] == "1") {
      one++;
      // console.log(one);
    } else if (news[i] == "2") {
      two++;
      // console.log(two);
    } else if (news[i] == "3") {
      three++;
    } else if (news[i] == "4") {
      four++;
    } else if (news[i] == "5") {
      f++;
    } else if (news[i] == "6") {
      s++;
    } else if (news[i] == "7") {
      h++;
    } else if (news[i] == "8") {
      x++;
    } else if (news[i] == "9") {
      j++;
    } else if (news[i] == "0") {
      z++;
    }
  }
  console.log(z.toString());
  console.log(one.toString());
  console.log(two.toString());
  console.log(three.toString());
  console.log(four.toString());
  console.log(f.toString());
  console.log(s.toString());
  console.log(h.toString());
  console.log(x.toString());
  console.log(j.toString());
}
