function square(number) {
  return number * number;
}
// console.dir(square);
// console.log(Object.getOwnPropertyDescriptors(square, "__proto__"));
// console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));

//18-04
function mutiply(x, y) {
  return x * y;
}
// console.log(mutiply());
// console.log(mutiply(1, 2));
// console.log(mutiply(1, 2, 3));
// 18-13
console.log(function () {}.hasOwnProperty("prototype"));
console.log({}.hasOwnProperty("prototype"));
