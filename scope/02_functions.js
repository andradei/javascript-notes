/*
  Function declarations vs function expressions:
    - `function` as the first word in a line: declaration.
    - otherwise: expression. The also should end with a "".
    - Function declarations are hoisted to the top as all declarations do.
    - Function expressions are executed after hoisting as all expressions do.

  Named function vs Anonymous function:
    - When it is named, you can refer to it inside the actual function.
    - Named functions have their names shown on the stack trace. Good for debugging.
    - Self-documenting.

  Always use named function. Unless too lazy to come up with a name.
*/

var a = hi() // 'Hi'
var b = foo // undefined

console.log(a, b)

// Function expression.
// The function is named (not anonymous). And `bar` has a scope in itself.
// It won't be hoisted during the declaration hoisting phase.
var foo = function bar () {
  var foo = 'baz'

  function baz (foo) {
    foo = bar
    foo // A reference to the function which is this function's outer scope
  }

  baz()
}

foo()
// bar() // Reference error. `bar` isn't in the global scope. See comment on `foo`

// Function declaration.
// It will be hoisted up.
function hi () {
  return 'Hi'
}
