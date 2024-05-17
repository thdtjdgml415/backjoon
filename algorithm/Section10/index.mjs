/**
 * 함수를 작성, 이름은 원하는대로 다만 배열과 값을 인수로 사용
 * 배열에는 숫자, 값은 또 다른 숫자 전체 배열에 대한 루프를 만들고
 * 현재 확인 중인 배열 항목이 우리가 입력하는 값과 동일한지 확인
 * 동일면 해당 값의 인덱스 반환 없다면 -1
 */
/**
 * foreach 사용법
 * 문제를 풀다가 forEach문이 이상하다는걸 발견 했다. 이
 */
// function linearSearch(arr, num) {
//   arr.forEach((element, index) => {
//     if (element === num) {
//       return index;
//     }
//   });
//   return -1;
// }

// console.log(linearSearch([10, 15, 20, 25, 30], 15));

// function linearSearch(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i; // 일치하는 값을 찾으면 인덱스를 반환
//     }
//   }
//   return -1; // 일치하는 값이 없으면 -1 반환
// }

/**
 * 이진 검색법
 * - 정리된 배열에서만 사용이 가능하다
 */

function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    console.log(start, mid, end);
  }
  return -1;
}
// console.log(binarySearch([1, 5, 7, 10, 20, 100, 101], 101));

/**
 * 나이브 문자열 검색
 *  긴 문자열을 루프, 짧은 문자열도 루프
 *  확인 문자열이 일치하는지 일치하지 않으면 벋어남
 *  일치하면 짧은 문자열 다음 인덱스 확인
 *  문자열 count가 반환 없으면 0 반환
 */
function niveChar(char, subChar) {
  let count = 0;
  for (let i = 0; i < char.length; i++) {
    for (let j = 0; j < subChar.length; j++) {
      if (char[i + j] !== subChar[j]) break;
      if (j === subChar.length - 1) count++;
    }
  }
  return count;
}
console.log(niveChar("abcacabbc", "cabbdsada"));
