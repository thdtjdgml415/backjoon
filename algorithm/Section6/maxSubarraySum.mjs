console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null

function maxSubarraySum(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length < num) return null;
  let total = 0;
  let subtotal = 0;

  for (let i = 0; i < num; i++) {
    total += arr[i];
  }

  subtotal = total;

  for (let i = num; i < arr.length; i++) {
    subtotal = subtotal - arr[i - num] + arr[i];

    total = Math.max(total, subtotal);
  }
  return total;
}
