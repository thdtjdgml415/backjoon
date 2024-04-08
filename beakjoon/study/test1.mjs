const person = {};

// 데이터 프로퍼티의 정의
Object.defineProperty(person, "firstName", {
  value: "Song",
  writable: true,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(person, "lastName", {
  value: "Hee",
});

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log("firstName", descriptor); // firstName { value: 'Song', writable: true, enumerable: true, configurable: true }

descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log("lastName", descriptor); // lastName { value: 'Hee', writable: false, enumerable: false, configurable: false }
