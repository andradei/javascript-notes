/*
  ES6 Math type.
*/

// More trigonometry functions:
// Hyperbolic counterparts of existing ES5 functions.
console.log(Math.acosh(1)) // 0
console.log(Math.asinh(0)) // 0
console.log(Math.atanh(0)) // 0
console.log(Math.cosh(0)) // 1
console.log(Math.sinh(0)) // 0
console.log(Math.tanh(0)) // 0

// Cudeb root
console.log(Math.cbrt(27)) // 3

// The number of leading zeros in the 32-bit representation of a number.
console.log(Math.clz32(5)) // Since 5 is 101 in binary (takes 3 bits), this will return 29 (32 - 3).

// More logarithm functions:
// The natural logarithm of a number + 1.
console.log(Math.log1p(35)) // 3.58351893845611

console.log(Math.log10(100)) // 2
console.log(Math.log2(32)) // 5

// The base of the natural logarithm e raised to the power of the number given -1.
console.log(Math.expm1(35)) // 1586013452313429.8

// Find the hypotenuse
// 3^2 + 4^2 = 5^2
console.log(Math.hypot(3, 4)) // 5

// Return the closest number that can be represented using JavaScript's number system.
console.log(Math.fround(2.888)) // 2.888000011444092

// Find the sign of a number:
// Returns: 1 for positive, 0 for the `0` number, -1 for negative.
console.log(Math.sign(10)) // 1
console.log(Math.sign(0)) // 0
console.log(Math.sign(-10)) // -1

// Truncate as opposed to flooring
console.log(Math.trunc(2.8)) // 2 - round down
console.log(Math.trunc(-2.8)) // -2 - round up

console.log(Math.floor(2.8)) // 2 - round down
console.log(Math.floor(-2.8)) // -3 - round down
