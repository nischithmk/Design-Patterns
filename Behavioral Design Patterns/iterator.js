// Behavioral Design Patterns
// These patterns are concerned with improving communication between dissimilar objects.

// Iterator Pattern //
// It is a behavioural design pattern that provides a way to access the elements of an
// aggregate object sequentially without exposing its underlying representation.
class Iterator {
  constructor(array) {
    this._array = array;
    this.nextIndex = 0;
  }
  next() {
    if (this.nextIndex < this._array.length) {
      return {
        value: this._array[this.nextIndex++],
        done: false,
      };
    } else {
      return {
        value: undefined,
        done: true,
      };
    }
  }
}

//usage
const arr = [10, 20, 30, 40, 50];
const iter = new Iterator(arr);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);

//iterator using Symbol.iterator
const iter2 = arr[Symbol.iterator]();
console.log(iter2.next());

//Generators
function* fibonacciGenerator() {
  let current = 0;
  let next = 1;

  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const fib = fibonacciGenerator();

for (var i = 0; i <= 10; i++) {
  console.log(fib.next().value);
}
