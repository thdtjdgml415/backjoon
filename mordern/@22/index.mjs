// const circle = {
//   radius: 5,
//   getDiameter() {
//     return 2 * this.radius;
//   },
// };
// console.log(circle.getDiameter());

function Circle(radius) {
  // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
}
Circle.prototype.getDiameter = function () {
  // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  return 2 * this.radius;
};

const circle = new Circle(5);
// console.log(circle.getDiameter());

//this는 어디서든 참조가 가능하다.
// 전역에서 this는 window
console.log(this); // 브라우저 window, node.js : undefined

function square(number) {
  // 일반 함수 내부에서 this도 전역 객체다.
  console.log(this); // window, undefined
  return number * number;
}

square(2);

const person = {
  name: "Lee",
  // 메서드 내부에서 this는 호출한 객체를 가리킨다.
  getName() {
    console.log(this); //{ name: 'Lee', getName: [Function: getName] }
    return this.name;
  },
};
console.log(person.getName()); //Lee

function Person(name) {
  this.name = name;
  // 생성자 함수가 생성할 인스턴스를 가리킨다.
  console.log(this); //Person { name: 'Lee' }
}
const me = new Person("Lee");
