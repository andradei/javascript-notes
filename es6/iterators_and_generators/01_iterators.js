/*
  Iterators must implement the `next()` method, which returns the next element of the iterable in
  the form of the object:

    {value, done}

  Where `value` is the element of the iterable, and `done` is a boolean that tells whether this
  iterator reached the end.

  Iterators must implement an underlying mechanism to keep track of the elements and whether the
  element is the last item of the iterable:

  Iterables are the implementation of the iterator abstraction.

  A rough explanation:

    An iterable (a general collection)          An iterator (the "mechanism")

    var arr = [1, 2, 3, 4]                      method: next()
                                                {value: 1, done: false}
                                                {value: 2, done: false}
                                                {value: 3, done: false}
                                                {value: 4, done: false}
                                                {value: undefined, done: true}

  The iterator protocol is commonly used in `for of` loop constructs:

    var arr = [1,2]
    for (let i of arr) {
      // `i` is a value of the collection as opposed to a key or index
    }

  In the `for of` loop, the iterator for `arr` will be retrieved, `next()` will be called on
  it for every iteration of the loop, and the construct will check `next().done`.
*/

'use strict'

// `for` loop:
var sum = 0
var numbers = [1, 2, 3, 4]

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}

console.log(sum)

// `for in` loop:
sum = 0

for (let i in numbers) {
  sum += numbers[i]
}

console.log(sum)

// Iterator
//
// This is only a way to show the iterator protocol and mechanism.
sum = 0

var iterator = numbers[Symbol.iterator]() // Retrieve the iterator
var next = iterator.next() // Get the first item: {value: 1, done: false}

while (!next.done) {
  sum += next.value // Access the value
  next = iterator.next() // Get the next item
}

console.log(sum)

// The iterator protocol is commonly use with the `for of` construct:
sum = 0

for (let i of numbers) {
  sum += i
}

console.log(sum)

// ------------------------------------------------------------------------------------------------

// Creating iterables manually
var Aviary = {
  birds: [],
  addBird: function (bird) { this.birds.push(bird) },
  [Symbol.iterator]: function () {
    var i = 0

    return {
      next: () => {
        if (i === this.birds.length) {
          return {value: undefined, done: true}
        } else {
          i++ // Since this statement must be before `return`...
          return {value: this.birds[i - 1], done: false} // ... `i - 1` is used
        }
      }
    }
  }
}

var birdsPark = Object.create(Aviary)

var birds = ['periquito', 'papagaio', 'arara', 'tucano', 'calopcita', 'urubu']

for (let b of birds) {
  birdsPark.addBird(b)
}

console.log(birdsPark.birds)

for (let i of birdsPark) {
  console.log(i)
}
