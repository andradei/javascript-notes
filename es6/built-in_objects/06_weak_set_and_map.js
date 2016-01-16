/*
  WeakSet and WeakMap were introduced to solve a specific browser/DOM problem:

  Scenario with Set or Map:
    - DOM as a body with 3 divs
    - Query the DOM and add all body>divs into a Set
    - Delete one div from the body in the DOM
    - The set will still point to the removed div
    - The removed div can't get garbage collected because Set points to it
    - This is memory leak

  WeakSet and WeakMap will get their elements garbage collected anytime the garbage collector runs,
  so they don't have many of the Set/Map properties.
*/

var p = console.log

var wset = new WeakSet()
// All true
p(wset.size === undefined)
p(wset.entries === undefined)
p(wset.values === undefined)
p(wset.forEach === undefined)

// Has these functions
p(WeakSet.prototype.add)
p(WeakSet.prototype.has)
p(WeakSet.prototype.delete)

// Doesn't have this function
p(WeakSet.prototype.clear)

// Other than that, all the WeakSet/Map work just like Set/Map

// CAN'T USE PRIMITIVE VALUES AS ITEMS
// wset.add(1) // TypeError: Invalid value used in weak set

var obj = {1: 'one'}
wset.add(obj)
p(wset.has(obj)) // true
p(wset[0]) // true
var x = wset[0]
p(x)
wset.delete(obj)
p(wset) // WILL ALWAYS BE REPRESENTED AS EMPTY! USE `has` instead

// -------------------------------------------------------------------------------------------

var map = new WeakMap()
// All true
p(map.size === undefined)
p(map.entries === undefined)
p(map.values === undefined)
p(map.keys === undefined)
p(map.forEach === undefined)

// Has these functions
p(WeakMap.prototype.set)
p(WeakMap.prototype.has)
p(WeakMap.prototype.delete)

// Doesn't have this function
p(WeakMap.prototype.clear)

var key1 = {}
var key2 = {}
map.set(key1, 'emptyObj1')
map.set(key2, 'emptyObj2')
p(map.get(key1), map.get(key2))

map.delete(key1)
p(map.get(key1), map.get(key2))
