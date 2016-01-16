/*
  Guarded by --harmony_default_paremeters (in progress)
*/

'use strict'

// Function with a default parameter.
function countTo (count = 10) {
  for (let i = 0; i < count; i++) {
    console.log(i)
  }
}

countTo() // The same as `countTo(undefined)`. But calling `countTo(null)` binds `null` to `count`
console.log('--------------------------')
countTo(5) // Binds `5` to `count`
