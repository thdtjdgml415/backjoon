/**
 * recursive
 */
console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465

// 피보나치 수열
function fib(num) {
  // add whatever parameters you deem necessary - good luck!
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}
