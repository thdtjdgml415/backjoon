// // function Sum(money) {
// //   this.money = money;
// //   this.getSum = function () {
// //     return money + money;
// //   };
// // }
// // const sum1 = new Sum(10000);
// // const sum2 = new Sum(20000);

// // console.log(sum1.getSum()); // 20000
// // console.log(sum2.getSum()); // 40000

// // 상속을 이용한 중복제거
// function Sum(money) {
//   this.money = money;
// }

// Sum.prototype.getSum = function () {
//   return this.money + this.money;
// };
// const sum1 = new Sum(10000);
// const sum2 = new Sum(20000);
// // console.log(sum1.getSum() === sum2.getSum); // true
// // console.log(sum1.getSum()); // 20000
// // console.log(sum2.getSum()); // 40000

// // Object.prototype
// const person = { name: "Lee" };

// // console.log(person.hasOwnProperty("__proto__"));
// // console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
// // // 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
// // console.log({}.__proto__ === Object.prototype);

// // 상호 참조에 의한 프로토타입
// const parent = {};
// const child = {};

// // child.__proto__ = parent;
// // parent.__proto__ = child;

// // 프로토타입 체인 종점
// // const obj = Object.create(null);
// // console.log(obj.__proto__); // undefined
// // console.log(Object.getPrototypeOf(obj)); // null

// // const obj = {};
// const parentObj = { x: 1 };

// // Object.getPrototypeOf(obj);
// // Object.setPrototypeOf(obj, parentObj);

// // console.log(obj.x);

// // 함수의 프로토타입은 생성자 함수가 생성할 인스턴스를 가리킨다.
// // console.log(function () {}.hasOwnProperty("prototype"));

// //일반 객체는 prototype 프로퍼티를 소유하지 않음
// // console.log({}.hasOwnProperty("prototype"));

// // 화살표 함수는 non-constructor
// const Person = (name) => {
//   this.name = name;
// };

// // console.log(Person.hasOwnProperty("Prototype")); // false
// // console.log(Person.prototype); // undefined

// // 축약 표현 함수도 non-constuctor
// const short = {
//   foo() {},
// };

// // console.log(short.foo.hasOwnProperty("prototype")); // false
// // console.log(short.foo.prototype); // undefined

// // 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입

// //  obj 객체를 생성한 생성자 함수는 object다.
// const obj = new Object();
// // console.log(obj.constructor === Object); //true

// const add = new Function("a", "b", "return a + b");
// // console.log(add.constructor === Function); // true

// function Func(name) {
//   this.name;
// }
// // my 객체를 생성한 생성자 함수는 Func이다.
// const my = new Func("act");
// // console.log(my.constructor === Func); // true

//19-18
// // 2. Object 생성자 함수에 의한 객체 생성
// // 인수가 전달되지 않았을 때 추상 연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성한다.
// let obj = new Object();
// console.log(obj); // {}
// // 1. new.target이 undefined 거나 Object가 아닌 경우
// // 인스턴스 -> Foo.prototype -> Object.prototype 순으로 프로토타입이 생성됨
// class Foo extends Object {}
// console.log(new Foo()); // Foo {}
// // 3. 인수가 전달된 경우에는 인수를 객체로 변환한다.
// // Number 객체 생성
// obj = new Object(123);
// console.log(obj); //[Number: 123]

// obj = new Object("123");
// console.log(obj); //[String: '123']

// 19-20

console.log(Person.prototype); // {constructor: f}
// 생성자 함수
// function Person(name) {
//   this.name = name;
// }

const Person = (name) => {
  this.name = name;
};
