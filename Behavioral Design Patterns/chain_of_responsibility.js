// Behavioral Design Patterns
// These patterns are concerned with improving communication between dissimilar objects.

// Chain of Responsibility Pattern //
// This is a behavioural design pattern that provides a chain of loosely coupled objects.
// Each of these objects can choose to act on or handle the request of the client.
class CumulativeSum {
  constructor(intialValue = 0) {
    this.sum = intialValue;
  }

  add(value) {
    this.sum += value;
    return this;
  }
}

const sum1 = new CumulativeSum();
console.log(sum1.add(10).add(20).add(30).sum);

const sum2 = new CumulativeSum();
console.log(sum2.add(20).add(25).sum);
