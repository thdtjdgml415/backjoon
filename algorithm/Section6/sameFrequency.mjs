console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

function sameFrequency(arr1, arr2) {
  // good luck. Add any arguments you deem necessary.
  let str1 = arr1.toString();
  let str2 = arr2.toString();
  if (str1.length !== str2.length) return false;
  let frequency1 = {};
  let frequency2 = {};
  for (let val of str1) {
    frequency1[val] = (frequency1[val] || 0) + 1;
  }
  //   console.log("frequency1", frequency1);
  for (let val of str2) {
    frequency2[val] = (frequency2[val] || 0) + 1;
  }
  //   console.log("frequency2", frequency2);
  for (let key in frequency1) {
    if (!key in frequency2) {
      return false;
    }
    if (frequency2[key] !== frequency1[key]) {
      return false;
    }
  }
  return true;
}
