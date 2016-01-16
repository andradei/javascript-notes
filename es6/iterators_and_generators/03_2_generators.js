/*
  setTimeout exists in order to make synchronous code in JavaScript by faking the blocking result
  of a function call.

  ES6 (Now ES2015):

  Generators are a way to make asynchronous code in a synchronous fashion. They have the mechanisms
  to hand control back to the caller and get called on demand via the `yield` keywords.

  Generators are function that don't need to finish executing. Their execution can be paused and
  resumed on demand.

  Defining a generator:
    function* generator() {
      console.log('Hello')
      yield null
      console.log('World')
    }

  Retrieving a generator:
    var g = generator() // Generator isn't executed yet. Just retrieved and assigned

  Execute the generator up to its next `yield` expression or its end:
    g.next() // Prints "Hello" and pause execution when it finds `yield null` returning control
    g.next() // Prints "World" and finishes execution when it finds its end
*/

// This code prints 'Meaning of life: 42' after 3 seconds.
function getData (d, cb) {
  setTimeout(function () {
    cb(d)
  }, 1000)
}

getData(10, function (num1) {
  var x = 1 + num1
  getData(30, function (num2) {
    var y = 1 + num2
    getData('CALLBACKS: Meaning of life: ' + (x + y), function (answer) {
      console.log(answer)
    })
  })
})

// Implementation with Generators:

// A coroutine will manage the execution and start of a generator.
// It takes a generator `g`.
// This is convenient because you can call `coroutine()` to advance the generator
// instead of `g.next()`.
function coroutine (g) {
  // Get a generator and assing it to `it`.
  // Notice `g()` doesn't execute the generator, but returns one instead.
  var it = g()

  // Return a function that is able to call the generator once from the begining. And is able to be
  // called with arguments.
  return function () {
    return it.next.apply(it, arguments)
  }
}

// Get a generator ready to be called
var run = coroutine(function *() {
  var x = 1 + (yield null) // Generator is paused, returning `null` to the calling point
  var y = 1 + (yield (null)) // Parenthesis are options but good for expression organization

  // Generator is paused, returning `x + y` to the calling point.
  yield (x + y) // Parenthesis can be left out
})

// Run once with no arguments so the coroutine's generator is executed up to its 1st `yield`.
// It returns a `null`, so `run()` has a return value of null
run()

// Run it again with an argument so the coroutine's generator is resumed, with `10` passed as the
// return value of `yield null`, added to `1`, and assigned the result to `x`.
// Then it continues execution until is finds the next `yield`, returning `null` to this expression
run(10)

// Run it again with an argument so the coroutine's generator is resumed, with `30` passed as the
// return value of `yield null`, added to `1`, and assigned the result to `y`.
console.log('GENERATORS: Meaning of life: ' + run(30).value)

// `coroutine`'s underlying generator is done.
console.log('GENERATORS is done: ' + run().done)
