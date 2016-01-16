/*
  Closure is when a function "remembers" its lexical scope even when the function is executed
  outside that lexical scope.

  The scopes kept alive because of closure won't get garbage collected while there is a closure
  pointing to them.
*/

function foo () {
  var bar = 'bar1'

  function baz () {
    console.log(bar)
  }

  bam(baz)
}

function bam (baz) {
  baz() // Executing `baz` outside of its lexical scope and accessing `bar`. This is closure.
}

foo()

// -----------------------------------------------------------------------------------------------

function foo2 () {
  var bar = 'bar2'

  return function () {
    console.log(bar)
  }
}

function bam2 () {
  foo2()() // 'bar'
}

bam2()

// -----------------------------------------------------------------------------------------------

function foo3 () {
  var bar = 'bar3'

  setTimeout(function () {
    console.log(bar)
  }, 3000)
}

foo3()

// -----------------------------------------------------------------------------------------------

// Won't call it in node.js/io.js because jQuery is for HTML documents.
function foo4 () {
  var bar = 'bar4'

  $('#btn').click(function (evt) {
    console.log(bar)
  })
}

// -----------------------------------------------------------------------------------------------

function foo5 () {
  var bar = 0

  setTimeout(function () {
    console.log(bar++)
  }, 1000)

  setTimeout(function () {
    console.log(bar++)
  }, 2000)
}

foo5() // 0 1

// -----------------------------------------------------------------------------------------------

function foo6 () {
  var bar = 10

  setTimeout(function () {
    var baz = 10
    console.log(bar++)

    setTimeout(function () {
      console.log(bar + baz)
    }, 1000)
  }, 4000)
}

foo6() // 10 21

// -----------------------------------------------------------------------------------------------

// Wrong
// This will print 6 every second.
for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log('i: ' + i)
  }, i * 1000)
}

// Right
// This will print from 1 to 5 every second.
for (var j = 1; j <= 5; j++) {
  (function (j) {
    setTimeout(function () {
      console.log('j: ' + j)
    }, j * 1000)
  })(j)
}

// Using `let`
;(function () {
  'use strict'
  // jshint esnext:true
  for (let z = 1; z < 5; z++) {
    setTimeout(function () {
      console.log('z: ' + z)
    }, z * 1000)
  }
})()
