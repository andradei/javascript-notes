/*
  Classic module pattern:
    1. Must have an outer, wrapping function that gets executed. Can be an IIFE.
    2. Must return a function that closes over the internal scope.
*/

// The outer-enclosing function call.
// `o` becomes "private" to the scope, and `foo` has access to it. In this way, I can return
// an object or function that exposes only what I want.
var foo = (function () {
  // This becomes private.
  var o = {bar: 'bar'}

  // The function that expose only what it wants from this inner scope.
  return {
    bar: function () {
      console.log(o.bar)
    }
  }
})()

foo.bar() // 'bar'

// -----------------------------------------------------------------------------------------------

// This is different than the pattern above because it returns a reference to the private object,
// making it extensible.
var foo2 = (function () {
  var publicAPI = {
    bar: function () {
      publicAPI.baz()
    },
    baz: function () {
      console.log(o.bar)
    }
  }

  return publicAPI
})()

foo2.bar() // 'baz'

// -----------------------------------------------------------------------------------------------

// `define` is undefined here, but modules patterns could be abstracted away in libraries.
// There are libraries that already do that.
define('foo3', function () {
  var o = {bar: 'bar'}

  return {
    bar: function () {
      console.log(o.bar)
    }
  }
})

// -----------------------------------------------------------------------------------------------

// ES6 `export` - It is file based. Meaning that the content of the file will behave like it lives
// inside a function with the name of the file, getting it's own scope.

// Let's say this is in foo.js
var o = {bar: 'bar'}

// jshint esnext:true
export function export_func () {
  return o.bar
}

// First way to call ES6 modules.
// It imports one or more hand-picked properties from the module.
import expor_func from 'foo'
export_func()

// Second way to call ES6 modules.
// Imports the whole module.
// This syntax propably won't make it into JavaScript
module foo from 'foo'
foo.bar()
