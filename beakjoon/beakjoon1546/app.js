const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n")

// console.log(input)

let numArr = input.splice(1,1)
let Arr = []
let NewArr = []
let New = 0
numArr.map((e)=>{
Arr = e.split(" ")
})
// console.log(Arr)
for (let i = 0; i< input[0]; i++){
  NewArr.push(parseInt(Arr[i]))
}
// console.log("배열 숫자로 변환",NewArr)

NewArr.map((el)=>{
  New += Number(el/Math.max(...NewArr)* 100);

})
console.log( New/input[0])