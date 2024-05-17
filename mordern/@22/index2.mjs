const obj = {
  name: "Alice",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};
obj.greet(); // this는 obj에 바인딩됨

const getName = obj.greet;
console.log(getName());
