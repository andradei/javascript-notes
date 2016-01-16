/*
  The examples are self-explanatory

  Jan 6, 2016 - Destructuring in enabled on node via the --harmony_destructuring flag.
                It is currently a feature in progress.
*/

;(function () {
  'use strict'

  var x = 2
  var y = 1

  // This is not an array literal, but a destructuring syntax.
  var [z, w] = [y, x] // Read disclaimer on top

  console.log(z) // 1
  console.log(w) // 2

  var [first, last] = ['Luke', 'Skywalker']
  console.log(first + ' ' + last)

  // -------------------------------------------------------------------------------------------
  // Non-matching bindings:

  var [i, j, k] = [0, 10]
  console.log(i) // '0'
  console.log(j) // '10'
  console.log(k) // undefined

  // -------------------------------------------------------------------------------------------
  // Object destructuring:

  var person = {
    first: 'Han',
    last: 'Solo',
    titles: {
      one: 'Pilot',
      two: 'Anti-hero'
    }
  }

  // The "key" is the existing property of the object.
  // The "value" is the new variable that will be bound to the "key's" value.
  var {first: firstName, last: lastName} = person
  console.log(firstName + ' ' + lastName)

  // -------------------------------------------------------------------------------------------
  // Pattern matching and advanced destructuring:

  // Remember, "keys" are the existing properties of the object on the right-hand side of the
  // expression. "values" are the new variables being defined.
  var {titles: theTitles} = person
  console.log(theTitles) // {one: 'Pilot', two: 'Anti-hero'}

  // Destructuring nested properties
  var {titles: {one: firstTitle, two: secondTitle}} = person
  console.log(firstTitle) // 'Pilot'
  console.log(secondTitle) // 'Anti-hero'

  // Function + Object Destructing:
  // The 2nd parameter is a destructuring construct for 3 variables.
  var doWork = function (aString, {data1, data2, data3}) {
    return [data1, data2, data3]
  }

  // The object passed has properties with the names matching the variables in the `doWork`
  // parameters.
  // The 1st parameter gets bound to `asString`, the object's properties are pattern-matched against
  // the variables inside the destructuring construct on the 2nd parameter.
  // As long as the names match, the values are destructured. They become undefined otherwise.
  var result = doWork('test', {data1: 10, data2: false})
  console.log(result) // [10, false, undefined]
})()
