// Creational Design Patterns
// Creational patterns are for handling object creational mechanisms.A creational design
// pattern basically solves a problem by controlling the creation process of an object.

// Builder Pattern //
// The Builder pattern is used to create objects in "steps". Normally we will have functions or methods that add certain properties or methods to our object.
// In this pattern we separate the creation of properties and methods into different entities.
var bird = {
  name: "Humming",
  desc: "Humming is good bird",
};

var animal = {
  name: "tiger",
  desc: "Tiger is a wild animal",
};

const addHuntingAbility = (obj) => {
  obj.hunt = () => console.log(`${obj.name} can hunt now!`);
};

const addFlyingAbility = (obj) => {
  obj.fly = function () {
    console.log(`${obj.name} can fly now!!!!`);
  };
};

addHuntingAbility(animal);
addFlyingAbility(bird);

bird.fly();
animal.hunt();
