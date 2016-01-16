/*
  Object-Oriented JavaScript
  This is one of the languages that are truly object-oriented. It is not class-oriented though.
  JavaScript uses functions with the `new` keyword to generate objects. These are constructors,
  and the make objects LINKED TO its own prototype.

  The JavaScript runtime has a function called Object, which has a prototype attribute with all
  the standard methods all objects get in the language. `Object.prototype` is an object with the
  methods like `toString()`, `valueOf()`, etc.

  The prototype system makes use of different terms:
    - .prototype -> a reference to an object that all functions have.
    - [[Prototype]] -> a PRIVATE reference to the originating `MyFunction.protopype`.
    - __proto__ -> a getter function on the global `Object.prototype` that properly returns the
                   prototype `this` is linked to. It also is a PUBLIC reference to [[Prototype]].
*/

// Create a function with the label Foo.
// Create an object with a label prototype as a property of the function Foo.
// Foo.prototype === {...} (an object with certain properties).
// prototype.constructor === Foo (the prototype has a reference to its creator function).
function Foo (who) {
  this.me = who
}

// Put `identify` property in `prototype`.
Foo.prototype.identity = function () {
  return 'I am ' + this.me
}

// a1 object is created.
// `a1` is "linked" to `Foo.prototype`. THIS LINK IS REFERED TO AS [[Prototype]].
// `this` is bound to `a1`.
// Foo will return `this`, which is bound to a reference of `a1`. That's how `.me` is bound to
// `a1` as a property.
var a1 = new Foo('a1')
// Same thing happens as with `a1`.
var a2 = new Foo('a2')

// Bind `.speak` to `a2` only, which points to a function.
a2.speak = function () {
  console.log('Hello, ' + this.identity() + '.')
}

// `a1` has no `constructor` property, so it will go up the prototype chain until it finds it.
console.log(a1.constructor === Foo)
console.log(a1.constructor === a2.constructor)
console.log(a1.__proto__ === Foo.prototype)
console.log(a1.__proto__ === a2.__proto___)

console.log(a1.__proto__ === Object.getPrototypeOf(a1))
console.log(a2.constructor === Foo)
console.log(a1.__proto__ === a2.__proto__)
console.log(a2.__proto__ === a2.constructor.prototype)
