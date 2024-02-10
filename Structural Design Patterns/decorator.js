// Structural Design Patterns
// These patterns are concerned with class and object composition.
// They help structure or restructure one or more parts without affecting the entire system.
// In other words, they help obtain new functionalities without tampering with the existing ones.

// Decorator Pattern //
// This is also a structural design pattern that focuses on the ability to add behaviour or
// functionalities to existing classes dynamically.It is another viable alternative to sub - classing.
class Book {
  constructor(name, author, price) {
    this._name = name;
    this._author = author;
    this.price = price;
  }

  getDetails() {
    return `${this._name} by ${this._author}`;
  }
}

function giftWrap(book) {
  book.isGiftWrapped = true;
  book.unwrap = () => {
    return `Unwrapped ${book.getDetails()}`;
  };

  return book;
}

function hardBindBook(book) {
  book.hardBind = true;
  book.price += 5;
  return book;
}

const book1 = giftWrap(new Book("It starts with us", "Coleen Hoover", 150));
console.log(book1.isGiftWrapped);
console.log(book1.unwrap());

const book2 = hardBindBook(new Book("It Ends With Us", "Nikhitha Vs", 250));
console.log(book2.hardBind);
console.log(book2.getDetails());
console.log(book2.price);
