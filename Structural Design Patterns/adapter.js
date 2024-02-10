// Structural Design Patterns
// These patterns are concerned with class and object composition.
// They help structure or restructure one or more parts without affecting the entire system.
// In other words, they help obtain new functionalities without tampering with the existing ones.

// Adapter Pattern //
// This is a structural pattern where the interface of one class is translated into another.
// This pattern lets classes work together that could not otherwise because of incompatible interfaces.

class oldCalculator {
  constructor() {
    this.oprations = function (val1, val2, operation) {
      switch (operation) {
        case "add":
          return val1 + val2;
        case "sub":
          return val1 - val2;
        default:
          return NaN;
      }
    };
  }
}

class newCalculator {
  constructor() {
    this.add = function (val1, val2) {
      return val1 + val2;
    };

    this.sub = function (val1, val2) {
      return val1 - val2;
    };
  }
}

class clacAdapter {
  constructor() {
    var newCalc = new newCalculator();
    this.operation = function (val1, val2, operation) {
      switch (operation) {
        case "add":
          return newCalc.add(val1, val2);
        case "sub":
          return newCalc.sub(val1, val2);
        default:
          return NaN;
      }
    };
  }
}

//usage

var oldCalc = new oldCalculator();
console.log(oldCalc.oprations(10, 5, "add"));
console.log(oldCalc.oprations(10, 5, "sub"));

var newCalc = new newCalculator();
console.log(newCalc.add(10, 5));
console.log(newCalc.sub(10, 5));

var adaptorCalc = new clacAdapter();
console.log(adaptorCalc.operation(10, 5, "add"));
console.log(adaptorCalc.operation(10, 5, "sub"));
