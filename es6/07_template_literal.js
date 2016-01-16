/*
  String templates have a mechanism to interpolate values with the `${}` syntax, which can also
  evaluate expressions before assigning a value the the interpolation.

  It also has template tags, which calles a function with paremeters (strings, ...values) where
  `strings` is an array with the string structure (and interpolator placeholders), and `...values`
  is an array with the interpolated values.
*/

'use strict'

var name = 'Luke'

// String templates are wrapped around ``.
console.log(`${name} is a Jedi.`)

// Interpolator evaluates the expression before assigning a value.
console.log(`1 + 2 = ${1 + 2}`)

// Template tags:

// Function to-be template tag
//              The argument list MUST be like this. See top comment.
function upper (strings, ...values) {
  console.log(strings)
  console.log(values)
  let result = ''

  // Put the string back in order
  for (let i in strings) {
    result += strings[i]

    if (i < values.length) {
      result += values[i]
    }
  }

  // Make it uppercase and return
  return result.toUpperCase()
}

// With a tag (a function with specific argument list as shows above) the `upper` function is
// called with two arrays:
// 1 with the template contants: ['This is ', ', he's Jedi #', '.']
// 1 with the interpolated values: ['Luke', 1]
console.log(upper `This is ${name}, he's Jedi #${1}.`)
