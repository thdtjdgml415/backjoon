function deepFreeze(target) {
  // 객체가 아니거나 동결된 객체는 무시하고 동결되지 않은 객체만 동결
  if (target && typeof target === "object" && !Object.isFrozen(target)) {
    Object.freeze(target);
    Object.keys(target).forEach((key) => deepFreeze(target[key]));
  }
  return target;
}
const person = {
  name: "Lee",
  address: {
    city: "seoul",
    contury: "korea",
    number: { one: 1, two: 2, three: 3 },
  },
};
deepFreeze(person);
console.log(Object.isFrozen(person)); // true
console.log(Object.isFrozen(person.address)); // true
console.log(Object.isFrozen(person.address.number)); // true

person.address.city = "Busan"; // Cannot assign to read only property 'city' of object '#<Object>'
