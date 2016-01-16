/*
  `const` creates and initializes a readonly variable

  GOTCHA:
    Node and browsers will parse lines of code that changes a const value, BUT it won't make the change.
    In strict mode this throws an error.
*/

const MAX_SIZE = 10

// This is ignored by the engine, MAX_SIZE remains unchanged. Errors out in strict mode.
MAX_SIZE = 20

console.log(MAX_SIZE) // prints '10'
