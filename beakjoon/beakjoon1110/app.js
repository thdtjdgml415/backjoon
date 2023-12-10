const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n")

let orignal = input;

let a = orignal;

let cnt = 0

while(true) {
  let b = parseInt(a/10 + a%10);
  let c = a%10 + '' + b%10;
  // console.log( 'while' ,a)
  a=c

  cnt++

  if(parseInt(c)==parseInt(input[0])){
    break;
  }
}

console.log(cnt)