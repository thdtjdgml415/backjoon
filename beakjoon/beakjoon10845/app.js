const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
  let queue = [];
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    let [command, value] = arr[i].split(" ");

    switch (command) {
      case "push":
        queue.push(value);
        break;
      case "pop":
        if (queue.length === 0) {
          result.push(-1);
        } else {
          result.push(queue.shift());
        }
        break;
      case "size":
        result.push(queue.length);
        break;
      case "empty":
        result.push(queue.length === 0 ? 1 : 0);
        break;
      case "front":
        if (queue.length === 0) {
          result.push(-1);
        } else {
          result.push(queue[0]);
        }
        break;
      case "back":
        if (queue.length === 0) {
          result.push(-1);
        } else {
          result.push(queue[queue.length - 1]);
        }
        break;
    }
  }

  console.log(result.join("\n"));
}

solution(input);
