/**
 * 버블정렬
 *  i라는 변수를 가지고 배열 맨끝에서 루프를 시작해서 맨 앞에서 끝남
 *  외부 루프 안에는 j라는 변수가 포함된 내부 루프가 있고
 *  내부 루프는 처음부터 i-1까지 실행
 */

// 기본버전
// function bubleSort(arr) {
//   for (let i = arr.length; 0 < i; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     console.log("done");
//   }
//   return arr;
// }

// ES2015
// function bubleSort(arr) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       swap(arr, j, j + 1);
//     }
//   }
//   return arr;
// }

// 최적화 버전
function bubleSort(arr) {
  let noSwap;
  for (let i = arr.length; 0 < i; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
      if (noSwap) break;
    }
    console.log("done");
  }
  return arr;
}

console.log(bubleSort([3, 2, 1, 9, 8, 7, 6, 5, 4]));
