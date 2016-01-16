/*
  Immediatly
  Invoked
  Function
  Expression

  A way to create a block scope.
*/

var foo = 'foo1'

// Remember to use named functions for debbuging always.
;(function iife () {
  var foo = 'foo2'
  console.log(foo) // 'foo2'
})()

console.log(foo) // 'foo1'

// Passing variables to the block scope.
// Notice function name on IIFEs can be reused.
;(function iife (bar) {
  var foo = bar
  console.log(foo) // 'foo1'
})(foo) // Pass variables to the inner scope

console.log(foo) // 'foo1'

// ----------------------------------------------------------------------

;(function () {
  /*
    ES6 introduces the `let` keyword that will create Block Scoping.

    `let` won't be hoisted. And it only starts existing on the line it gets declared.
    This is a big difference from `var`.
  */

  'use strict'

  function let_foo () {
    var bar = 'bar'

    // `let` will make `i` a variable in the scope of the loop only.
    // `var` would make `i` a variable in the scope of `foo`.
    // jshint esnext:true
    for (let i = 0; i < bar.length; i++) {
      console.log(bar.charAt(i))
    }

    console.log(i) // ReferenceError. Unless `var i` was used.
  }

  function let_bar (bar) {
    if (bar) {
      // `baz` is bound to the above if scope
      // jshint esnext:true
      let baz = bar

      if (baz) {
        // `bam` is vound to the above if scope
        // jshint esnext:true
        let bam = baz
      }

      // console.log(bam) // ReferenceError
    }

    // console.log(baz) // ReferenceError
  }

  let_bar('bar')

  // Error, `a` isn't hoisted.
  // console.log(a)
  // jshint esnext:true
  let a = 'Hi'
})()
