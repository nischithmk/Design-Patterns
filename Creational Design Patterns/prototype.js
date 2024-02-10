// Creational Design Patterns
// Creational patterns are for handling object creational mechanisms.A creational design
// pattern basically solves a problem by controlling the creation process of an object.

// Prototype Pattern //
// This pattern is an object - based creational design pattern.
// In this, we use a sort of a “skeleton” of an existing object to create or instantiate new objects.

var car = {
  noOfWheels: 4,
  start() {
    return "started";
  },
  stop() {
    return "stopped";
  },
};

const myCar = Object.create(car, { owner: { value: "John" } });

Object.setPrototypeOf(myCar, car);
console.log(myCar.__proto__ === car);

console.log(Object.getPrototypeOf(myCar));
console.log(myCar.owner);
