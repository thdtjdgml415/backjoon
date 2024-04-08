const person = {
  firstName: "Song",
  lastName: "JB",

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

// 데이터 프로퍼티를 통한 프로퍼티 값 참조
console.log(person.firstName + " " + person.lastName);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter함수 호출
person.fullName = "Sung Hee";
console.log(person); // firstName: "Sung", lastName: "Hee"}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log("getter", person.fullName); // Sung Hee

// firstName은 데이터 프로퍼티다.
// 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]
let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log("descriptor", descriptor); // descriptor { value: 'Sung', writable: true, enumerable: true, configurable: true }

// fullName은 접근자 프로퍼티다.
// descriptor { get: [Function: get fullName], set: [Function: set fullName] enumerable: true, configurable: true
descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log("descriptor", descriptor);
/**
 * descriptor {
   get: [Function: get fullName],
   set: [Function: set fullName],
   enumerable: true,
   configurable: true
  }
 */
