const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("");
var characterMap = [
  2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9,
];
var offsetCharCode = "A".charCodeAt(0);
console.log("offsetCharCode", offsetCharCode);
function solution(props) {
  console.log(
    props.reduce((preiousValue, currentChar) => {
      console.log("preiousValue", preiousValue);
      console.log("currentChar", currentChar);
      let mapp = characterMap[currentChar.charCodeAt(0) - offsetCharCode];
      // console.log("mapp", mapp);
      return preiousValue + mapp;
    }, input.length)
  );

  // // console.log(props);
  // let x = 0;
  // props.map((el) => {
  //   // console.log(el);
  //   if (el === "A" || el === "B" || el === "C") {
  //     x += 3;
  //   } else if (el === "D" || el === "E" || el === "F") {
  //     x += 4;
  //   } else if (el === "G" || el === "H" || el === "I") {
  //     x += 5;
  //   } else if (el === "J" || el === "K" || el === "L") {
  //     x += 6;
  //   } else if (el === "M" || el === "N" || el === "O") {
  //     x += 7;
  //   } else if (el === "P" || el === "Q" || el === "R" || el === "S") {
  //     x += 8;
  //   } else if (el === "T" || el === "U" || el === "V") {
  //     x += 9;
  //   } else if (el === "W" || el === "X" || el === "Y" || el === "Z") {
  //     x += 10;
  //   }
  // });
  // console.log(x);
}
solution(input);
