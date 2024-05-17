console.log(averagePair([100, 1, 3, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

function averagePair(a, b) {
  //   console.log("a, b", a, b);
  a.sort((a, b) => a - b);

  // add whatever parameters you deem necessary - good luck!
  let start = 0;
  let end = a.length - 1;
  if (b.length === 0) return false;

  while (start < end) {
    let averge = (a[start] + a[end]) / 2;
    if (averge === b) {
      return true;
    } else if (averge < b) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}
