// Structural Design Patterns
// These patterns are concerned with class and object composition.
// They help structure or restructure one or more parts without affecting the entire system.
// In other words, they help obtain new functionalities without tampering with the existing ones.

// Flyweight Pattern //
// This is a structural design pattern focused on efficient data sharing through fine - grained objects.
// It is used for efficiency and memory conservation purposes.

class IceCream {
  constructor(flavour, price) {
    this.flavour = flavour;
    this.price = price;
  }
}

class IceCreamFactory {
  constructor() {
    this._iceCreams = [];
  }

  createIcecream(flavour, price) {
    let ice = this.getIcecream(flavour);
    if (ice) return ice;
    else {
      const newIce = new IceCream(flavour, price);
      this._iceCreams.push(newIce);
      return newIce;
    }
  }

  getIcecream(flavour) {
    return this._iceCreams.find((ice) => ice.flavour === flavour);
  }
}

//usage

const iceFactory = new IceCreamFactory();

const vanillaIce = iceFactory.createIcecream("vannila with choco", 80);
const chocoVanillaIce = iceFactory.createIcecream("vannila with choco", 80);

console.log(vanillaIce === chocoVanillaIce);
