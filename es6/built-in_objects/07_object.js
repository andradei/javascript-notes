/*
  `Object.is` is almost like `===` and it behaves more consistently where
  `===` is quirky.

  `Object.assign`
*/

var p = console.log

// Quirk of `===`
p(0 === -0) // true
p(NaN === NaN) // false

// Fixed
p(Object.is(0, -0)) // false
p(Object.is(NaN, NaN)) // true

// 
