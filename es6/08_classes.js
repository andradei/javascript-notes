/*
  Classes in JavaScript is a way "mimic" Class Oriented Programming. This is misleading to the
  actual prototypal mechanisms of JavaScript.

  The use of `super`
    `super()` - Used ONLY in the `constructor()` method to call same method up the prototype chain.
    `super.foo()` - Call `foo()` up the prototype chain.
    `get bar()` and `set bar()` - CAN'T be called with `super.bar` or `super.bar()`

  Getters and Setters
    Don't walk up the prototype chain

*/
'use strict'

// ES5 way to create constructors and "class-like" behavior.
function Bird (name) {
  this.name = name
}

Bird.prototype.fly = function () {
  console.log(`${this.name} is flying.`)
}

var eagle = new Bird('Eagle')
eagle.fly()

// ------------------------------------------------------------------------------------------
// ES6 classes

// Inheritance
class Animal {
  constructor (family) {
    this._family = family
  }

  // Can't be used `super` on
  get family () {
    return `${this._name} is a ${this._family}`
  }

  // Can't be used `super` on
  get name () {
    return 'SUPER NAME'
  }

  represent () {
    return `${this.name} is an animal.`
  }
}

class Bird2 extends Animal {
  constructor (name, family) {
    // calls `constructor()` up in the prototype chain
    super(family)
    this._name = name
  }

  // Can't be used `super` on
  get name () {
    return this._name + ' from getter'
  }

  // Can't be used `super` on
  set name (n) {
    this._name = n
    console.log(`New name is now ${n}`)
  }

  fly () {
    console.log(`${this.name} is flying.`)
  }

  // Can use `super.someMethodUpTheChain()`
  represent () {
    return `${super.represent()} ${this.name} is a bird that can fly.`
  }
}

var albatroz = new Bird2('Albatroz', 'Bird')
albatroz.fly()

// Access to properties
console.log(eagle.name)
console.log(albatroz._name) // Direct access to property
console.log(albatroz.name) // Using the getter syntax

// Setting properties
albatroz.name = 'ALBATROZ' // This calls the setter method for `name`
console.log(albatroz.name)

// Checking inheritance
console.log(albatroz.family)
console.log(albatroz.represent())
