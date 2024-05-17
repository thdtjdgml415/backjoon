/**
 * 선택 정렬
 *  최소값을 저장할 변수를 만들기
 *  정렬의 첫번째 값이 ㅏ가장 작음
 *  배열에 최소값과 비교하며 배열의 위치를 변경
 */
function selectionSort(arr) {
  let leng = arr.length;
  for (let i = 0; i < leng - 1; i++) {
    // 최소값 찾기
    let minIndex = i;

    for (let j = i + 1; j < leng; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 최소값과 현재 위치의 값 교환
    console.log(minIndex);
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
console.log(selectionSort([64, 25, 12, 22, 11])); // [11, 12, 22, 25, 64]
// console.log(selectionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
// console.log(selectionSort([29, 10, 14, 37, 13])); // [10, 13, 14, 29, 37]
