/*
  ES6 Number type.
*/

// JavaScript number literals:

// Decimal:
var d = 1

// Hexadecimal: literal predeced by "0x"
var h = 0xa // The hexadecimal value of "a" is the decimal value of "10"

// ES5 Octal: literal predeced by "0"
// NOT ALLOWED in strict mode for being too confusing of a syntax.
var o = 071 // The octal value of "71" is the decimal value of "57"

// -------------------------------------------------------------------------------------

// NEW Literals:

// ES6 Octal: literal predeced by "0o" or "0O"
var O = 0o71

// ES6 Binary Literal: preceded by "0b"
var b = 0b1101 // The binary value of "1101" is the decimal value of "13"

// -------------------------------------------------------------------------------------

// ES6's Number will parse the new literals in addition to the previous ones.
var num = Number(0xa)
console.log(num) // 10

num = Number(071)
console.log(num)

num = Number(0o71)
console.log(num)

num = Number(0b1101)
console.log(num)

// -------------------------------------------------------------------------------------

// New Number prototype functions (The global functions with same name have less reliable resuls)
console.log(Number.parseInt('3'))
console.log(Number.parseFloat('3.5'))
// Glogal, older, `isFinite` and `isNaN` will parse strings before checking. This one won't
console.log(Number.isFinite(1)) // true
console.log(Number.isFinite('1')) // false
console.log(isFinite('1')) // true

console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN('NaN')) // false
console.log(isNaN('NaN')) // true

console.log(Number.isInteger(1)) // true
console.log(Number.isInteger(1.0)) // true
console.log(Number.isInteger(1.5)) // false

// -------------------------------------------------------------------------------------

// Dealing with large numbers: JavaScript can't handle numbers greater and 2^53.
// It "RANDOMLY" assings the same value to numbers larger than this.
// This is very inconsistent.

console.log(Math.pow(2,53) === Math.pow(2,53) + 1) // true!!!!!!!!
console.log(Math.pow(2,53) + 3 === Math.pow(2,53) + 5) // true!!!!!!!!

// New in ES6
// The range that is safe to deal with:
console.log(Number.MAX_SAFE_INTEGER) // Math.pow(2, 53) - 1
console.log(Number.MIN_SAFE_INTEGER) // (Math.pow(2, 53) * -1) + 1

// Check number at runtime:
console.log(Number.isSafeInteger(9007199254740991))
console.log(Number.isSafeInteger(-9007199254740991))
console.log(Number.isSafeInteger(9007199254740992))
console.log(Number.isSafeInteger(-9007199254740992))
