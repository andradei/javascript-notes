/*
  `Object.is` is almost like `===` and it behaves more consistently where
  `===` is quirky.

  `Object.assign` is like a jQuery.extend
*/

var p = console.log

// Quirk of `===`
p(0 === -0) // true
p(NaN === NaN) // false

// Fixed
p(Object.is(0, -0)) // false
p(Object.is(NaN, NaN)) // true

// Take properties from one object and copy them into another object
var shark = {
  bite: target => target.hurt = true
}

var person = {}

// laser will be a mixin.
var laser = {
  shoot: target => target.exploded = true
}

// Add `laser` mixin to `shark` object:
// This actually adds `shoot` into `shark` as its own copy.
Object.assign(shark, laser)
p(shark) // The `shoot` property was added
shark.shoot(person)
p(person.exploded) // true

// ----------------------------------------------------------------------

var weapon = 'Lightsaber'
var name = 'Yoda'

// Classic
var jedi = {
  weapon: weapon,
  name: name,
  speak: () => p('Do or do not.')
}

// Short-hand
var jedi2 = {
  weapon, // Attributes in short-hand will look for variables of the same name
  name,
  speak () { // Methods in short-hand
    p('Do or do not.')
  }
}

p(jedi)
p(jedi2)
jedi.speak()
jedi2.speak()

// ----------------------------------------------------------------------

// Classic
function createObj (name, value) {
  var obj = {}
  obj[name] = value
  return obj
}

function createObj2 (name, value) {
  return {
    [name]: value
  }
}

var obj1 = createObj('title', 'Jedi')
var obj2 = createObj2('title', 'Jedi')

p(obj1)
p(obj2)
