/*
DISCLAIMER:
  JavaScript doens't have inheritance. Instead, it has behavior delegation via prototype chain.
  Having stated that, this script is a hack to make delegation of behavior via prototype chain
  look like CLASS ORIENTED inheritance.

To work with the inheritance chain, lines 23, 28, and 29 are essential.
  23 - `call` will call the inherited type's constructor with `this` properly set.
  28 - The prototype of the type is set. This will also change the constructor to be the
       inherited type's.
  29 - That's why this line is necessary. Here we set the constructor back to the correct type.
*/

// Top level type.
function Animal (voice) {
  this.voice = voice || 'grunt'
}

// Give it inheritable properties.
Animal.prototype.speak = function () {
  console.log(this.voice)
};

// Specialized type.
function Cat (name, color) {
  // Same as `new Animal('Meow')` but from inside a function, with `this`
  // properly set to the correct object.
  Animal.call(this, 'Meow')
  this.name = name
  this.color = color
}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat

var bola = new Cat('Bola', 'Tri-color')

console.log(bola)
console.log(bola instanceof Animal)
console.log(bola instanceof Cat)
