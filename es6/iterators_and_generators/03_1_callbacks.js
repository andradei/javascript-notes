// Call a function, and chain a continuation of that event so that after the function is called,
// the other is called as a continuation.
// setTimeout fakes a delay, and executes the function it is passed to after the delay.
setTimeout(function () {
  console.log('callback called')
}, 1000)

// --------------------------------------------------------------------------------

// Callback hell.
// Print 'one', 'two', 'three' 1 second after the other.
// setTimeout will wait for 1 sec, then call the callback function.
setTimeout(function () {
  console.log('one')
  // This will only be executed after the outer setTimeout finishes becase this is
  // part of the callback.
  setTimeout(function () {
    console.log('two')
    // This is also part of a callback. So it is executed only after its outer
    // setTimeout finishes executing.
    setTimeout(function () {
      console.log('three')
    }, 1000)
  }, 1000)
}, 1000)

// The same result can be achieved with the following:
function one (cb) {
  console.log('one')
  setTimeout(cb, 1000)
}

function two (cb) {
  console.log('two')
  setTimeout(cb, 1000)
}

function three (cb) {
  console.log('three')
}

// Sync with the previous examples of this file
setTimeout(
  function () {
    one(function () {
      two(three)
    })
  }, 4000)
