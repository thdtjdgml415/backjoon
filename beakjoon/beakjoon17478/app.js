const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

function outputFn(num) {
  const underline = "____";
  const txt = `${underline.repeat(num)}"재귀함수가 뭔가요?"
${underline.repeat(
  num
)}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.
${underline.repeat(
  num
)}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.
${underline.repeat(
  num
)}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`;

  console.log(txt);
}

function solution(num) {
  console.log(`어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.`);

  let count = 0;
  function recursive(input, count) {
    const underline = "____";
    if (count === input)
      return console.log(`${underline.repeat(count)}"재귀함수가 뭔가요?"
${underline.repeat(count)}"재귀함수는 자기 자신을 호출하는 함수라네"`);
    outputFn(count);
    return recursive(input, count + 1);
  }
  recursive(num, count);

  function endingRecursive(num) {
    const underline = "____";
    if (num === 0)
      return console.log(`${underline.repeat(num)}라고 답변하였지.`);
    const txt = `${underline.repeat(num)}라고 답변하였지.`;
    console.log(txt);
    return endingRecursive(num - 1);
  }
  endingRecursive(num);
}

solution(Number(input));
