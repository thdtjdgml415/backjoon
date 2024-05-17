console.log(isSubsequence("hello", "hello world")); // true
// console.log(isSubsequence("sing", "sting")); // true
// console.log(isSubsequence("abc", "abracadabra")); // true
// console.log(isSubsequence("abc", "acb")); // false (order matters)
//반복
// function isSubsequence(a, b) {
//   // good luck. Add any arguments you deem necessary.
//   // 문자열을 하나씩 비교하기 위해 배열로 쪼개기
//   let aIndex = 0;
//   let bIndex = 0;

//   while (aIndex < a.length && bIndex < b.length) {
//     if (a[aIndex] === b[bIndex]) {
//       aIndex++;
//     }
//     bIndex++;
//   }
//   return aIndex === a.length;
// }

// 재귀 풀이
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}
