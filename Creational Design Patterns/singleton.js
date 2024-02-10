// Creational Design Patterns
// Creational patterns are for handling object creational mechanisms.A creational design
// pattern basically solves a problem by controlling the creation process of an object.

// Singleton Pattern //
// Singleton is a special creational design pattern in which only one instance of a class can exist.It works like this —
// if no instance of the singleton class exists then a new instance is created and returned, but if an instance already exists,
// then the reference to the existing instance is returned.

class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    this._data = data;
    Database.exists = true;
    Database.instance = this;
    return this;
  }

  getData() {
    return this._data;
  }

  setData(data) {
    this._data = data;
  }
}

const mongo = new Database("mongo");
console.log(mongo.getData());

const sql = new Database("sql");
console.log(mongo.getData());

// mongo.setData("sql");
