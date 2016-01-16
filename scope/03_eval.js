/*
  JavaScript uses Lexical Scoping, meaning the scopes of the program are decided at compile time.

  The `this` keyword is an exception, using Dynamic Scoping.

  The `eval` keyword circumvents the Lexical Scoping of the language, treating strings as
  code at runtime, possibly creating variables and functions dynamically at the scope it is
  executed on.
  This makes code slower because the compiler can't optimize the string inside `eval`.

  The `with` construct also circumvents the Lexical Scoping. It creates a new scope at runtime.
  Not allowed in strict mode. And during runtime, the compiler disables all optimizations for this.
*/

var bar = 'bar'

function foo (str) {
  // Execute the code at run time. Slow...
  eval(str)
  console.log(bar)
}

foo('var bar = 42')

var obj = {
  a: 2,
  b: 3,
  c: 4
}

// Repetition of `obj.`
obj.a = obj.b + obj.c
obj.c = obj.b - obj.a

// With is a short-hand way to write logic above.
with(obj) {
  a = b + c
  // `d` is created in the global scope.
  d = b - a
  d = 3
}

obj.d // undefined
d // 3
