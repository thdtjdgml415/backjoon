console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

// 빈도수 세기 패턴
// function areThereDuplicates(...str) {
//   // good luck. (supply any arguments you deem necessary.)
//   console.log("str", str);
//   let frequency = {};
//   for (let val of str) {
//     frequency[val] = (frequency[val] || 0) + 1;
//   }
//   for (let key in frequency) {
//     if (frequency[key] !== 1) {
//       return true;
//     }
//   }
//   return false;
// }

// 다중 포인터 패턴
// function areThereDuplicates(...str) {
//   // console.log("str", str);
//   str.sort((a, b) => (a > b ? 1 : -1));

//   let start = 0;
//   let next = 1;
//   while (next < str.length) {
//     console.log(str[start], str[next]);
//     if (str[start] === str[next]) {
//       return true;
//     }
//     start++;
//     next++;
//   }
//   return false;
// }

// One liner
function areThereDuplicates() {
  console.log(arguments);
  return new Set(arguments).size !== arguments.length;
}
