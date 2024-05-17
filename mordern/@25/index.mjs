// console.log(Person);
// class Person {
//   // 생성자
//   constructor(name) {
//     // 인스턴스 생성 및 초기화
//     this.name = name; // name 프로퍼티는 public
//   }
//   //프로토타입 메서드 정의
//   sayHi() {
//     console.log(`Hi ${this.name}`);
//   }
//   // 정적 메서드
//   static sayHello() {
//     console.log("Hello");
//   }
// }
// console.log(typeof Person);
// const me = new Person("Lee");

// console.log(me.name); // Lee
// me.sayHi(); // Hi Lee
// Person.sayHello(); // Hello

// // 클래스 호이스팅
// const Person = "dsa";
// {
//   console.log(Person);

//   class Person {}
// }
// // new 키워드 없이 호출 했을때
// class Person {}

// const me = Person();
// console.log(me);

// class 기명함수 표현식
// const Person = class myClass {};

// const me = new Person();
// console.log(me);
// const you = new myClass();

// 프로토타입 메서드
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHi = function () {
//   console.log(`Hi my name is ${this.name}`);
// };

// const me = new Person("Lee");
// me.sayHi();
// 클래스 프로토타입 메서드
class Person {
  constructor(name) {
    this.name = name;
  }

  static sayHi() {
    console.log(`Hi ${this.name}`);
  }
}
Person.sayHi("dsad");
