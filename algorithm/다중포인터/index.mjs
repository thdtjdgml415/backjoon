// console.log("1", countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([])); //0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

function countUniqueValues(arr) {
  let num = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[num] < arr[i]) {
      num++;
      arr[num] = arr[i];
    }
    console.log(num, i);
  }
  return num + 1;
}
