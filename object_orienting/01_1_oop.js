/*

OOP with syntactic sugar:

*/

function Cat (name, color) {
  this.name = name
  this.color = color
}

// `new` sets `this` to the caller, in this case: `cat`.
var cat1 = new Cat('John Lennon', 'White')
cat1.age = 2

console.log('- Syntactic suger ES5 cat1:')
console.log(cat1)

// The constructor function can be called like a normal function.
// In this case, `this` becomes `Window` in browsers.
// This is dangerous!
//    Window.name === 'Window' (This is bad!)
//    Window.color === 'Black' (Not useful)
// `cat2` value will be `undefined` because `Cat()` doesn't return anything;
var cat2 = Cat('Window', 'Black')

console.log('- Calling constructor as function (BAD) cat2:')
console.log(cat2)

/*

OOP without syntactic sugar:

*/

var cat3 = Object.create(Object.prototype,
  {
    name: {
      value: 'Proto Cat',
      enumerable: true,
      writable: true,
      configurable: true
    },
    color: {
      value: 'Gray',
      enumerable: true,
      writable: true,
      configurable: true
    }
  }
)

console.log('- Without syntactic sugar cat3:')
console.log(cat3);

/*

ES6 Classes:
This is syntactic sugar.

*/

(function () {
  'use strict'
  /* jshint esnext: true */
  class Cat {
    constructor (name, color) {
      this.name = name
      this.color = color
    }

    speak () {
      console.log('Meow')
    }
  }

  var cat4 = new Cat('Newy', 'White')
  cat4.speak()
})()

/*

Bracket notation: it is used mostly when object properties use reserved names

*/

cat3.age = 3
cat3['age'] = 4

/*

Property descriptors

*/

console.log('- Property descriptors')
console.log(Object.getOwnPropertyDescriptor(cat1, 'name'))

/*

Writable attribute

*/

var cat5 = {
  // `name` is a pointer to an object.
  name: {first: 'Gato', last: 'Skywalker'},
  color: 'Blue'
}

// This will prevent the pointer value from changing. But won't prevent the contents
// the pointed object from changing.
Object.defineProperty(cat5, 'name', {writable: false})
// Prevent the contents of the pointed object from changing.
Object.freeze(cat5.name)

console.log('- Making object property read-only cat5')
console.log(cat5)

// This is an error in strict mode only.
cat5.name.first = 'Otag'
console.log(cat5)

/*

Enumerable attribute

*/

Object.defineProperty(cat5, 'name', {enumerable: false})

// Only properties that are enumerable are allowed in an loop.
for (var propertyName in cat5) {
  console.log(propertyName + ': ' + cat5[propertyName])
}

// Same for getting the keys, `name` won't show
console.log(Object.keys(cat5))

// Serializing the object outputs only the enumerable properties.
console.log(JSON.stringify(cat5))

/*

Configurable attribute

*/

// Lock almost all configurations from being changed on the object.
Object.defineProperty(cat5, 'color', {configurable: false})
// This will throw an error in strict mode.
// Object.defineProperty(cat5, 'color', {enumerable: false});
// This will throw an error in strict mode.
// Object.defineProperty(cat5, 'color', {configurable: true});
// This will throw an error in strict mode.
delete cat5.color
console.log(cat5.color)
// But the writable property can still be changed.
Object.defineProperty(cat5, 'color', {writable: false})

/*

Getters and Setters

*/

var cat6 = {
  // `name` is a pointer to an object.
  name: {first: 'Luke', last: 'The Jedi'},
  color: 'Red'
}

Object.defineProperty(cat6, 'fullname',
  {
    get: function () {
      return this.name.first + ' ' + this.name.last
    },
    set: function (value) {
      var nameParts = value.split(' ')
      this.name.first = nameParts[0]
      this.name.last = nameParts[1]
    }
  }
)

// Use the getter
console.log(cat6.fullname)
// User the setter
cat6.fullname = 'Darth Vader'
console.log(cat6.fullname)
console.log(cat6.name.first)
console.log(cat6.name.last)
