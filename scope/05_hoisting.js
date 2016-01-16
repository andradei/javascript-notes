/*
  Hoisting is a concept to learn how JavaScript compiles. It is not a physical process.
  In reality, the JavaScript compiler will compile the declarations of variables and functions
  first, then execute the code with the expressions and operations found in the code.

  Hoisting (or rather, the first phase of compilation) is like an automatic way of creating header
  files, such as in the C language.
  C header files is manual hoisting. JavaScript compilers do that automatically by following its
  set of specifications.

  This makes JavaScript capable of handling mutual recursion. Which is impossible in interpreted
  languages.

  Below is an example of mutual recursion:
*/

console.log(a(1)) // 39

function a (foo) {
  if (foo > 20) return foo
  // `b` can be called because it was already declared in the declaration phase of compilation.
  return b(foo + 2)
}

function b (foo) {
  // `c` can be called because it was already declared in the declaration phase of compilation.
  return c(foo) + 1
}

function c (foo) {
  return a(foo * 2)
}
