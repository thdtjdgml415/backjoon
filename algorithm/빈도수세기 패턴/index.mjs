/**
 * 2개의 배열을 허용하는 same 함수 작성 배열의 모든 값이
 * 두번째 배열에 해당하는 값을 가지면 참을 반환해야한다.
 * 첫번째 배열에는 여러 갑이 있는데 두번째 배열의 값이 정확히 동일하지만
 * 제곱이 되어있는지 알아야 한다.
 * 하지만 순서는 상관없으니 동일할 필요 없고 그저 제곱 값의 빈도는 동일
 *
 * example
 * same([1,2,3], [4,1,9]), true
 * same([1,2,3]), [1,9]) false
 */
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));
