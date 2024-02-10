// Creational Design Patterns
// Creational patterns are for handling object creational mechanisms.A creational design
// pattern basically solves a problem by controlling the creation process of an object.

// Factory Pattern //
// Factory pattern is another class-based creational pattern.
// In this, we provide a generic interface that delegates the responsibility of object instantiation to its subclasses.
class Football {
  constructor() {
    this._type = "footbal";
    this.kick = function () {
      return "you kicked the football";
    };
  }
}

class Basketball {
  constructor() {
    this._type = "basketball";
    this.bounce = function () {
      return "you bounced the basketball";
    };
  }
}

class BallFactory {
  constructor() {
    this.creatBall = function (type) {
      let ball;
      if (type === "football" || type === "soccer") ball = new Football();
      else if (type === "basketball") ball = new Basketball();
      ball.roll = function () {
        return `The ${this._type} is rolling`;
      };
      return ball;
    };
  }
}

var factory = new BallFactory();

var football = factory.creatBall("football");
var basketball = factory.creatBall("basketball");

console.log(football.roll());
console.log(basketball.roll());
console.log(football.kick());
console.log(basketball.bounce());
