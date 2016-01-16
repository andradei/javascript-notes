/*
  `this` carries with it the context in which it was CALLED.
  `this` follows 4 rules in precedence:
    1. `new` involves 4 new steps:
      1.1. An empty object `{}` is created.
      1.2. That object gets linked to a different object.
      1.3. That same object gets bound to `this` for the function called with `new` preceding it.
      1.4. If the function doesn't return anything, insert a `return this` as the last expression.
    2. Explicit binding rule: using `call()` or `apply()`, pass the explicit binding to this as the
       first argument. `call()` and `apply()` explicitly has the value to be bound to `this`.
    3. Implicit binding rule: `this` binds to the caller.
    4. Default binding rule: `this` binds to the global object. In strict mode, binds to undefined.
*/

function foo () {
  console.log(this.bar)
}

var bar = 'bar1'
var o1 = {foo: foo}
var o2 = {bar: 'bar2', foo: foo}
var o3 = {bar: 'bar3', foo: foo}

// `this` is the global object context.
foo() // 'bar1' or undefined, read the 4th rule

// `this` is the object context.
o1.foo() // undefined
o2.foo() // 'bar2'
o3.foo() // 'bar3'

// ------------------------------------

// Binding confusion

// Wrong
function foo_wrong () {
  var zar = 'bar5'
  // `this` is bound based on the calling context (line 51), which is the global object.
  this.baz = baz // Redundant line, since function `baz` is bound to the global scope.
  this.baz() // Same as `global.baz()`
}

// Right
function foo_right () {
  var obj = {zar: 'bar5', baz: baz}
  obj.baz()
}

function baz () {
  // console.log(this)
  console.log(this.zar)
}

// Declaring with `var` would make the variable NOT configurable in the global scope.
zar = 'bar6'
foo_wrong()
foo_right()

// ------------------------------------

function foo_call () {
  console.log(this.bar_call)
}

// Declaring with `var` would make the variable NOT configurable in the global scope.
bar_call = 'bar_call_1'
var obj_call = {bar_call: 'bar_call_2'}

foo_call() // 'bar_call_1'
foo_call.call(obj_call) // 'bar_call_2'

// ------------------------------------

// Hard Binding - predictable `this`

function foo () {
  console.log(this.bar)
}

var obj = {bar: 'bar'}
var obj2 = {bar: 'bar2'}

// Get a reference to `foo()`. Aliasing.
var orig = foo
// Rebind `foo`.
// The new foo disregard any context for `this`, using `obj` always.
foo = function () { orig.call(obj) }

foo() // 'bar'
foo.call(obj2) // 'bar'

// ------------------------------------

// Constructor calls

function foo1 () {
  this.baz = 'baz'
  // `this.bar` is undefined. `baz` isn't set yet, so it is undefined.
  console.log(this.bar + ' ' + baz)
}

var bar = 'bar'
var baz = new foo1() // Outputs as a side effect: "undefined undefined"
