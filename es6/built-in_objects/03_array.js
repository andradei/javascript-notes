'use strict'

var arr = [1, 2, 3, 4, 5, 6, 7, 8]

// Find that takes an arrow function. Returns the first matching item for which it returns `true`.
console.log(arr.find(i => i > 5))

// Same as above, but returns the index instead.
console.log(arr.findIndex(i => i < 5))

// Fill the entire array with the given argument.
console.log(arr.slice().fill('a'))

// Alternatively, pass the range you want to be filled, first argument is inclusive, second is not.
console.log(arr.slice().fill('b', 1, 3)) // Fills from index 1 to index 2

// Copy within a range of the array into the specified initial index until a specified final index
// or until the end of the array.
//
// `copyWithin(target, start, end)`
//  `target` - Where to start copying to
//  `start` - The initial index of the copy range, inclusive.
//  `end` - The final range of the copy range, or `this.lenght`, exclusive.
//
// Notice the slice to be copied is chosen BEFORE the copy starts.
console.log(arr.slice().copyWithin(2, 0)) // Slice: [0..this.length], target: this[2]
// Slice: [1..4] or [2, 3, 4]
// Target: arr[3]
console.log(arr.slice().copyWithin(3, 1, 4)) // [1, 2, 3, 2, 3, 4, 7, 8]
console.log(arr.slice().copyWithin(3, 0, 2)) // [1, 2, 3, 1, 2, 6, 7, 8]
console.log(arr.slice().copyWithin(2, 0, 2)) // [1, 2, 1, 2, 5, 6, 7, 8]
console.log(arr.slice().copyWithin(4, 0)) // [1, 2, 3, 4, 1, 2, 3, 4]
console.log(arr.slice().copyWithin(2, 0, -3)) // [1, 2, 1, 2, 3, 4, 5, 8]

// `of` deals with a quirk.
console.log([1, 2, 3])
console.log(new Array(1, 2, 3)) // Equivalent to the array literal notation
console.log(new Array(3)) // Different than `[3]`! Create `[undefined, undefined, undefined]`
console.log(Array.of(3)) // This deals with the quirk, creating `[3]`

// `from` deals with another quirk.

// Returns an "array-like structure" which is not of type array. Array methods can't be called on
// the returned value.
// var arrayLike = document.querySelectorAll('div')
// arrayLike.forEach === undefined
// Array.from(arrayLike).forEach === [Function: forEach]

// Retrieve entries and keys
var entries = arr.entries() // Returns an iterator
var next = entries.next()
for (let i in arr) {
  console.log(next.value)
  next = entries.next()
}

var keys = arr.keys() // Returns an iterator
next = keys.next()
for (let i in arr) {
  console.log(next.value)
  next = keys.next()
}
