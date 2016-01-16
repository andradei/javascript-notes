/*
  Rest syntax substitutes the use of the function's `arguments` property which held the arguments.
  Guarded by --harmony_rest_parameters

  Only works on arrays.
*/

function printAll (...args) {
  // Rest parameters are of Array type.
  console.log(args instanceof Array)

  args.forEach(function (a) {
    console.log(a)
  })
}

printAll('Hi', 1, 2, {name: 'Isaac'})
