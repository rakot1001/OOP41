"use strict";

class User {
  constructor(name, surname, age, isBannned) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.isBannned = isBannned;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

/*Admin, у него все что у юзера и ban(user) */
class Admin extends User {
  constructor(name, surname, age, email) {
    super(name, surname, age);
    this.email = email;
  }
  ban(user) {
    user.isBannned = true;
  }
  unBan(user) {
    user.isBannned = false;
  }

  toggleBan(user) {
    if (user instanceof User) {
      user.isBannned = !user.isBannned;
      return;
    }
    throw new TypeError();
  }
}
const us = new User("Leo", "Gredfield", 40);
const ad = new Admin("X", "XX", 30);

/*class Moderator extends User {
  constructor(name, surname, age, permission) {
    super(name, surname, age);
    this.permission = permission;
  }

  createMessage(msgBody) {
    //send massage
  }

  deleteMessage(id) {
    //delete
  }
}

const moder = new Moderator("Moder", "Moderov", 30, {});*/
