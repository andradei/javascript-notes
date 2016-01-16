/*
  JavaScript doesn't have block scope. Only global and function scopes. `if` and `for` statements
  can have `var`s declared, but those vars will belong to the scope `if` or `for` belong to.

  What `let` does is create "block scope".
  Also, `let` isn't hoisted.
*/

;(function () {
  'use strict'

  function check (x) {
    if (x) {
      var y = 10
    }

    return y
  }

  // Will print '10'.
  console.log(check(1))

  // Will print 'undefined' because the `var y = 10` has its declaration "hoisted" to the top of the
  // scope (the function check) as `var y`, whose default value will be undefined. So if the `if`
  // statement doesn't evaluate to true, y will remain `undefined`.
  console.log(check(0))

  // Changind `var` to `let` will make `y` be "block scoped" so it won't be defined out side of the
  // 'if' statement.
  function check2 (x) {
    if (x) {
      let y = 10
      return y
    }

    // This is undeclared (not undefined).
    // return y
  }

  console.log(check2(1))
  console.log(check2(0))

  // `let` in for statement.
  function loop (n) {
    for (let i = 0; i < n; i++) {
      var x = i // Pass `i` (block scoped to `for`'s block) to `x` (function scoped)
    }

    // This would be valid if `var` had been used instead of `let`
    // return i
    return x
  }

  console.log(loop(10))
})()
