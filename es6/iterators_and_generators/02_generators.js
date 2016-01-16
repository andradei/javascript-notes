/*
  Generators are like a factory for iterators.

  Generators are special functions that can pause and resume its execution, giving more control
  over the flow of execution.

  `yield` can only be used in generators, and it is used to pause/resume execution.
  `return` sets the `done` property to true and yields, effectively terminating the generator.

*/

'use strict'

// This is a generator function:
function * numbers1 () {
  // Same as `yield* [1, 2, 3]`
  yield 1
  yield 2
  yield 3
}

// See same example implemented with iterators in "10_iterators.js".
var sum = 0
var iterator = numbers1()
var next = iterator.next()

while (!next.done) {
  sum += next.value
  next = iterator.next()
}

console.log('generator 1: ' + sum)

// Improve upon `numbers1` generator:

function * numbers2 (arr) {
  for (let a of arr) {
    yield a
  }
}

sum = 0
var arr = [1, 2, 3]
for (let a of numbers2(arr)) {
  sum += a
}

console.log('generator 2: ' + sum)

// Improve upon `numbers2` generator:

function * numbers3 (arr) {
  // `yield` can flatten an array and yield one value at a time.
  //
  // Same as `yield 1; yield 2; yield 3`
  yield * arr
}

sum = 0
arr = [1, 2, 3]
for (let a of numbers3(arr)) {
  sum += a
}

console.log('generator 3: ' + sum)
// ----------------------------------------------------------------------------------------------

// Generators build upon the iterator protocol in such a way that `next()` can be called with one
// argument AFTER the first call to `next()`
// This will pass data into the generator, to the point where `yield` paused execution, effectively
// resuming the generator with a value to be used at the point of the resume.

function * arrayJumper (items) {
  var incr = 0
  for (let i = 0; i < items.length; i++) {
    if (i + incr >= items.length) return
    else incr += yield items[i + incr]
  }
}

var hugeArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30
]

// Create a new array where the next element will be equal to the `i + count` where `i` is the
// index of a `hugeArray` element.
//
// Where:
//    `i` is an incrementing number with range [0, hugeArray.length]
//    `c` is an incrementing count.
//    `v` is `hugeArray[i + c]`
//
// newArray
// --------
// c | i  | v
// 0 |  0 | 1
// 1 |  1 | 2
// 2 |  2 | 4
// 3 |  4 | 7
// 4 |  7 | 11
// 5 | 11 | 16
// 6 | 16 | 22
// 7 | 22 | 29
// 8 | 29 | 37 STOP. is greater than hugeArray.length
//
// newArray = [1, 2, 4, 7, 11, 16, 22, 29]
var iter = arrayJumper(hugeArray)
var n = iter.next() // The first `next()` may take an argument, but that won't have any effect.

var count = 0
var newArr = []
while (!n.done) {
  newArr.push(n.value)
  n = iter.next(count)
  count++
}

console.log(newArr)

// ----------------------------------------------------------------------------------------------

// Print to the console 3 times, waiting 1 second between each print.

function pause (interval) {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Paused')
      resolve()
    }, interval)
  })

  return promise
}

function * printGenerator () {
  console.log('B')
  yield pause(1000)
  console.log('Y')
  yield pause(1000)
  console.log('E')
}

var printer = printGenerator()
printer.next().value.then(function () {
  return printer.next().value
}).then(function () {
  return printer.next().value
})

// ----------------------------------------------------------------------------------------------

// Get stockmarket prices.
// HANDLE ERRORS.

function getStockPrice () {
  setTimeout(function () {
    console.log('Retrieved data from Stock Market.')
    //                                    (max - min) + min
    var price = Math.floor(Math.random() * (50 - 40) + 40)

    if (price > 45) {
      runner.next(price) // Resume generator, passing the result
    } else {
      // In order to make generators throw exceptions, use the `throw()` method.
      runner.throw('Trade not made, price to low: ' + price)
    }
  }, 2000)
}

function executeTrade (price) {
  setTimeout(function () {
    console.log('Trade executed for price ' + price)
  })
}

function * run () {
  // Since this generator can throw errors via its yield statements, it needs to handle them
  // accordingly.
  try {
    // Putting yield in front of a method means that method must call `next()`,
    // optionally with a value, in order to resume the generator.
    var price = yield getStockPrice()
  } catch (error) {
    console.log(error)
  }

  if (price > 45) {
    executeTrade(price)
  } else {
    console.log()
  }
}

var runner = run()
next = runner.next()
