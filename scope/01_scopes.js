/*
  Javascript is a compiled language, but not in the general way.
  Scripts are compiled everytime before executing, and binaries aren't generated and distributed,
  source code is distributed instead.

  When compiling, the compiler makes several passes on the code.
  1st pass - Check for code grammatical correcteness.
  2nd pass - Get declaration expressions (var, function, etc.).
             THEY BELONG TO THE GLOBAL SCOPE.
  3rd pass - Get assignment expressions (assignments =, block scopes {}, etc.) and assing the values.
  4th pass - Do steps 1-3 for block scopes found.
  5th pass - From here on we don't care because it doesn't concern JavaScript scoping.

  JavaScript 5 has function scope and try/catch scope.
  Block scopes don't exist, that's why anonymous functions are used a lot as declarations.
  This way you create a block scope:
    (function() {...})()
*/

var foo = 'bar' // No scope specified, no block scope either. Global scope used.

function bar () { // local scope of bar specified.
  var foo = 'baz'
}

// Tricky!
function baz (foo) { // local scope of baz speficied.
  // This variable exists in `baz` scope.
  foo = 'bam'
  // var foo = 'bam' // Doesn't override the parameter `foo`, it overrides `foo` value though.

  // This is created almost "just in time" by the global scope.
  // In strict mode this is illegal. Otherwise, the compiler tries to be helpful and the global
  // scope creates `bam` just before using it.
  bam = 'yay'
}

// -------------------------------------------------

var zoo = 'zar'

function zar () {
  var zoo = 'zaz'

  function zaz (zoo) {
    zoo = 'zam'
    zam = 'yay'
  }

  zaz()
}

zar()
zoo // zar - from line 37
zam // yay - from line 50 -> 44
// The global scope won't create a function on the fly, only variables.
zaz() // ReferenceError: zaz is not defined
