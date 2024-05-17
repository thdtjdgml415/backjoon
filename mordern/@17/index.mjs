// 17-01
// 빈 객체 생성
const person = new Object();

// 프로퍼티 추가
person.name = "Lee";
person.sayHello = function () {
  // console.log("Hi My name is " + this.name);
};

// console.log(person); //{ name: 'Lee', sayHello: [Function (anonymous)] }

person.sayHello(); // Hi My name is Lee

//17-03
const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};
// console.log(circle1.getDiameter()); // 10

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
};
// console.log(circle2.getDiameter()); // 20

// 17-04
// 생성자 함수
function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
const circle3 = new Circle(5);
const circle4 = new Circle(10);
// console.log(circle3.getDiameter()); // 10
// console.log(circle4.getDiameter()); // 20

// 17-07
// 생성자 함수
function Circle1(radius) {
  // 1. 암묵적으로 빈 객체가 생성되고 this에 바인딩
  // 2. this에 바인딩되어 있는 인스턴스를 초기화
  //인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  // 3. 완성된 인스턴스가 바인딩된 this를 암묵적으로 반환
}
// 인스턴스 생성.
const circle5 = new Circle1(5); // 반지름이 5인 Circle1 객체 생성

// 17-12
// 생성자 함수
function Circle2(radius) {
  // 1. 암묵적으로 빈 객체가 생성되고 this에 바인딩
  // 2. this에 바인딩되어 있는 인스턴스를 초기화
  //인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  // 3. 완성된 인스턴스가 바인딩된 this를 암묵적으로 반환
  // 명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환
  return 100;
}
// 인스턴스 생성.
const circle6 = new Circle2(5); // 반지름이 5인 Circle1 객체 생성
console.log(circle6); // Circle2 { radius: 5, getDiameter: [Function (anonymous)] }
