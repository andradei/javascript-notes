// Syntactic sugar for `new Array(...)`.
var arr = ['red', 'blue', 'green']

// Get the last indexed value.
console.log(arr[arr.length - 1])

// Add behavior above as a property.
// This only works with the `arr` Array.
Object.defineProperty(arr, 'last', {get: function () {
  return this[this.length - 1]
}})

console.log(arr.last)

// Add behavior to all Array type objects by changing the `this` part to `Array.prototype`.
// Now all arrays will have the `last` property.
Object.defineProperty(Array.prototype, 'last', {get: function () {
  return this[this.length - 1]
}})

var arr2 = [1, 2, 3]
console.log(arr2.last)

/*
 Prototype is an attribute of any JavaScript object: `function`, `{}`, `Number`, `Array`, etc.
 - function prototype is the object instance that will become the prototype for all objects created
   using this function as a constructor.
 - object prototype is the object instance from which the object is inherited.
*/

// Attributes to the `prototype` that are set to this function will become part of the objects
// created using this function as a constructor.
var myFunc = function () {}
console.log(myFunc.prototype) // Empty Object {}

// This object will inherit the prototype of the object used to create it.
var cat = {name: 'Bola'}
// Literal objects don't have `prototype` property.
console.log(cat.prototype) // undefined
// But still have a `__proto__` property, to be deprecated.
console.log(Object.getPrototypeOf(cat)) // Empty Object {}

// A constructor
function Cat (name, color) {
  this.name = name
  this.colot = color
}

var bola = new Cat('Bola', 'Tri-color')

// Same prototypes, they point to the same object actually.
console.log(Cat.prototype)
console.log(Object.getPrototypeOf(bola))
console.log(Cat.prototype === Object.getPrototypeOf(bola))

// Change one prototype changes the other.
Cat.prototype.age = 3
console.log(Cat.prototype)
console.log(Object.getPrototypeOf(bola))
console.log(Cat.prototype === Object.getPrototypeOf(bola))

Object.getPrototypeOf(bola).size = 'Fat'
console.log(Cat.prototype)
console.log(Object.getPrototypeOf(bola))
console.log(Cat.prototype === Object.getPrototypeOf(bola))

// But prototype properties can be accessed directly or indirectly.
console.log(Object.getPrototypeOf(bola).age) // Directly
console.log(bola.age) // Indirectly
console.log(Cat.prototype.age === bola.age)
console.log(bola.hasOwnProperty('age'))

// This stops working when an object's own property is set to override the prototype's property.
bola.age = 5
console.log(Cat.prototype.age === bola.age)
console.log(bola.hasOwnProperty('age'))

// A constructor function is has its own __proto__,
// and going up the chain will eventually give null.
// New way to say Cat.__proto__
console.log(Object.getPrototypeOf(Cat))
// New way to say Cat.__proto__.__proto__
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Cat))) // {} - The Function prototype
// New way to say Cat.__proto__.__proto__.__proto__
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Cat)))) // null - This is Object's prototype
