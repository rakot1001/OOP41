"use strict";

class Animal {
  constructor(name, amountOfLegs, type) {
    this._name = name;
    this._amountOfLegs = amountOfLegs;
    this._type = type;
  }
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === "string") {
      this._name = name;
    }
  }
  eat() {
    return `${this.name} is eating`;
  }
}

const lion = new Animal("sneg", 4, "Cat");
const turtle = new Animal("test", 4, "Turtle");
