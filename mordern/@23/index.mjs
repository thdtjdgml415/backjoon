// const x = 1;
// const y = 2;

// function foo(a) {
//   const x = 10;
//   const y = 20;

//   console.log(a + x + y);
// }

// foo(100);

// console.log(x + y);

// 실행 컨텍스트 스택
const x = 1;

function foo() {
  const y = 2;
  function bar() {
    const z = 3;
    console.log(x + y + z);
  }
  bar();
}
foo(); // 6
