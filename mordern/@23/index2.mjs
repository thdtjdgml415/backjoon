// var x = 1;
// const y = 2;

// function foo(a) {
//   var x = 3;
//   const y = 4;

//   function bar(b) {
//     const z = 5;
//     console.log(a + b + x + y + z);
//   }
//   bar(10);
// }
// foo(20); // 42

let x = 1;
if (true) {
  let x = 10;
  console.log(x); // 10
}
console.log(x); // 1