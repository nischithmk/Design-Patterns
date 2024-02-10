// Behavioral Design Patterns
// These patterns are concerned with improving communication between dissimilar objects.

// Observer Pattern //
// It is a crucial behavioural design pattern that defines one - to - many dependencies between objects so that when one object(publisher) changes its state,
// all the other dependent objects(subscribers) are notified and updated automatically.
// This is also called PubSub(publisher / subscribers) or event dispatcher / listeners pattern.

class Publisher {
  constructor() {
    this._observers = [];
  }
  subscribe(observer) {
    this._observers.push(observer);
  }

  unsbuscribe(observer) {
    this._observers = this._observers.filter((obs) => obs !== observer);
  }

  fire(change) {
    this._observers.forEach((obs) => obs.update(change));
  }
}

class Subscriber {
  constructor(state) {
    this.state = state;
    this.initialstate = state;
  }

  update(change) {
    let state = this.state;
    switch (change) {
      case "INC":
        this.state = ++state;
        break;
      case "DEC":
        this.state = --state;
        break;
      default:
        this.state = this.initialstate;
    }
  }
}

//usage

const pub = new Publisher();

const sub1 = new Subscriber(1);
const sub2 = new Subscriber(19);

pub.subscribe(sub1);
pub.subscribe(sub2);

pub.fire("INC");
pub.fire("INC");

console.log(sub1.state);
console.log(sub2.state);

pub.unsbuscribe(sub2);

pub.fire("DEC");
pub.fire("DEC");
pub.fire("DEC");
pub.fire("DEC");

console.log(sub1.state);
console.log(sub2.state);
