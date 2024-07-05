const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

/**
 *  문제설명: 이 문제는 문장에서 가장 많은 빈도로 나타나는 문자를 출력하는 문제이다.
 *  예외적으로 같은 빈도로 나타나는 문자가 있다면 ?를 출력한다.
 *
 *  핵심: 문자열을 순회하면서 등장하는 문자를 하나씩 카운팅하고 가장 높게 나타나는 문자를 출력하거나 여러개라면 ?를 출력한다.
 */

function solution(input) {
  const LENGTH = Number(input.splice(0, 1)); // 배열로 출력시 0번째 인덱스는 문장의 갯수이기 떄문에 splice를 사용해 배열에서 잘라낸다.
  for (let i = 0; i < LENGTH; i++) {
    // 초기 배열을 순회하며 문장 배열을 하나씩 countNumber 함수에 입력합니다.
    countNumber(input[i]);
  }
}

function countNumber(str) {
  // 객체로 만들어 문장의 한 글자마다 count를 세어 객체 상태로 저장하는 함수 입니다.
  let countObj = {};

  for (let val of str) {
    if (val === " ") continue; // 띄어쓰기도 문자에 포함되기 때문에 띄어쓰기일때는 반복문을 넘기도록 합니다.
    if (!countObj[val]) {
      countObj[val] = 1;
    }
    countObj[val]++;
  }

  maxCount(countObj);
}

function maxCount(countObj) {
  // 객체를 순회하며 가장 빈도가 높은 문자를 출력하는 함수입니다.
  let maxCount = 0;
  let mostFrequent = [];
  // 객체를 탐색하고 Object.entries가 객체를 {["a", 1],["b", 1]} 이런식으로 구성하고 구조분해 할당을 이용해 key와 value를 나눠 순회하도록 합니다.
  for (let [key, value] of Object.entries(countObj)) {
    if (maxCount < value) {
      // 최대값 maxCount보다 value가 크다면 value가 새로운 maxCount이기 때문에 새로 재할당하고
      maxCount = value;
      // 빈도수가 높은 key값을 새로 할당하도록 합니다.
      mostFrequent = [key];
    } else if (maxCount === value) {
      // 빈도 수가 같다면 key값을 배열에 추가합니다.
      mostFrequent.push(key);
    }
  }
  // mostFrequent 배열 길이가 1보다 크다면 빈도 수가 높은 수가 여러개이기 때문에 "?"를 출력하고 아니라면 문자 그대로를 출력합니다.
  mostFrequent.length > 1 ? console.log("?") : console.log(mostFrequent.join());
}
solution(input);
