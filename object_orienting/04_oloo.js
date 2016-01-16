/*
  OLOO Programming

  Objects
  Linked to
  Other objects
  Only

  or

  Objects
  Linked to
  Other
  Objects

  A way to not use functions as constructors and the `new` keyword. This arguably decreases
  complexity, because it abstains from using functions (and its prototype delegations) letting
  the programmer use only objects all the way.
*/

// WITH FUNCTION CONSTRUCTORS

// MULTIPLE "INHERITANCE" - This isn't a thing in JavaScript. It only supports going up the
// prototype chain. This is not CLASS ORIENTED. In JavaScript, what happens is BEHAVIOR DELEGATION.

// Top level type - function constructor.
function Animal (sound) {
  this.sound = sound
}

// Behavior for all objects that link to this prototype in their chain.
Animal.prototype.speak = function () {
  return this.sound
}

// Specialized type - function constructor.
function Bird (sound) {
  Animal.call(this, sound)
}

// This LINKS `Bird.prototype` to `Animal.prototype` so Bird types can go up the prototype chain
// and access `Animal` behavior and properties.
//
// Bar.prototype = new Foo(); - This will call `Foo` and set is properties directly into `Bird`.
// That's not what we want.
// NOTE: `.constructor` points to function `Foo`. This happens because `Object.create` does the
// first 2 of the 4 steps that `new` do.
Bird.prototype = Object.create(Animal.prototype)

// Specialized behavior for `Bird`.
Bird.prototype.fly = function () {
  // It goes up the prototype chain to access `Animal.prototype.speak`.
  console.log('Bird is flying and saying: ' + this.speak())
}

var duck = new Bird('Quack')
var parrot = new Bird('Hellooo')

duck.fly()
parrot.fly()

// ---------------------------------------------------------------------------------------------

// OLOO ALTERNATIVE

// Plain object as the top type to delegate to, it has all function as properties.
var AnimalObj = {
  // Initialization function.
  init: function (sound) {
    this.sound = sound
  },
  // Behavior.
  speak: function () {
    return this.sound
  }
}

// Link to `AnimalObj.prototype` to use the delegation (via prototype chain) mechanism.
var BirdObj = Object.create(AnimalObj)

// Specialized behavior that uses delegation.
BirdObj.fly = function () {
  console.log('BirdObj is flying and saying: ' + this.speak())
}

// Instantiation and initialization become separate steps.
var duck2 = Object.create(BirdObj)
duck2.init('Quack')

// Instantiation and initialization become separate steps.
var parrot2 = Object.create(BirdObj)
parrot2.init('Helloooo')

duck2.fly()
parrot2.fly()
