// const x = 1;

// function outer() {
//   const x = 10;
//   const inner = function () {
//     console.log(x);
//   };
//   return inner;
// }
// // outer 함수를 호출하면 중첩 함수 inner을 반환한다.
// // 그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 팝되어 제거된다.
// const innerFunc = outer();
// innerFunc(); // 10

// const Counter = (function () {
//   let num = 0;

//   function Counter() {}

//   Counter.prototype.increase = function () {
//     return ++num;
//   };
//   Counter.prototype.decrease = function () {
//     return num > 0 ? --num : 0;
//   };

//   return Counter;
// })();

// const counter = new Counter();
// console.log(counter.increase());
// console.log(counter.increase());
// console.log(counter.decrease());

// const makeCounter = (function () {
//   let counter = 0;

//   return function (aux) {
//     counter = aux(counter);
//     return counter;
//   };
// })();

// // 보조 함수
// function increase(n) {
//   return ++n;
// }

// function decrease(n) {
//   return --n;
// }

// console.log(makeCounter(decrease));
// console.log(makeCounter(decrease));
// console.log(makeCounter(decrease));
// console.log(makeCounter(increase));

// 생성자 함수를 이용한 정보 은닉 1
// function Person(name, age) {
//   this.name = name; // public
//   let _age = age; // private

//   this.sayHi = function () {
//     console.log(`Hi my name is ${this.name}. i'm ${_age}`);
//   };
// }

// const me = new Person("Lee", 20);
// me.sayHi();
// console.log(me.name);
// console.log(me._age);

// 생성자 함수를 이용한 정보 은닉 2
// function Person(name, age) {
//   this.name = name;
//   let _age = age;
// }
// Person.prototype.sayHi = function () {
//   console.log(` Hi ${this.name} and ${_age}`);
// };

// 생성자 함수를 이용한 정보 은닉 3
// const Person = (function () {
//   let _age = 0;
//   function Person(name, age) {
//     this.name = name;
//     _age = age;
//   }
//   Person.prototype.sayHi = function () {
//     console.log(` Hi ${this.name} and ${_age}`);
//   };

//   return Person;
// })();

// const me = new Person("lee", 25);
// me.sayHi(); // Hi lee and 25
// console.log(me.name); // lee
// console.log(me._age); // undefined

// 자주 발생하는 실수
// var funcs = [];
// for (var i = 0; i < 3; i++) {
//   funcs[i] = function () {
//     return i;
//   };
// }
// for (var j = 0; j < funcs.length; j++) {
//   console.log("funcs", funcs[j]());
// }

// var funcs = [];
// for (var i = 0; i < 3; i++) {
//   funcs[i] = (function (id) {
//     return function () {
//       return id;
//     };
//   })(i);
// }
// for (var j = 0; j < funcs.length; j++) {
//   console.log(funcs[j]());
// }

const funcs = [];
for (let i = 0; i < 3; i++) {
  funcs[i] = function () {
    return i;
  };
}
for (let j = 0; j < funcs.length; j++) {
  console.log("funcs", funcs[j]());
}
