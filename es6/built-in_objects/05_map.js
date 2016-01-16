/*
  Maps are better to store key/values than objects.

  Different in Maps:
    - Maps take anything as keys
    - Keys won't be coerced into strings (like in objects)
    - Key/value pairs are unique
*/

'use strict'

function p (...args) {
  console.log(...args)
}

var map = new Map()
p(map.size) // 0

// Set key/value pairs
map.set('name', 'Isaac')

var objKey = {car: 'Sonata', year: 2003}
map.set(objKey, 'automobile')

p(map) // The print statement shows an entire object as the key

// Override a value of a key
map.set('name', 'Nicholas')

// Get values.
p(map.get('name')) // 'Nicholas'
p(map.get(objKey)) // 'automobile'

// Check if key exists
p(map.has(objKey)) // true

// Constructing a map with an array of arrays
var map2 = new Map([['name', 'Han'], ['dead', 'very']])
p(map2)

// Clear a map
map2.clear()
p(map2.size) // 0

// Delete item
map.delete(objKey)
p(map.get(objKey)) // undefined

// Iteration 1
var map3 = new Map([['name', 'Leia'], ['jedi', true], [23, 'no']])

// Value 1st argument! WTF!?
map3.forEach(function (v, k) {
  p(k, v)
})

// Iteration 2
for (let [k, v] of map3) {
  p(k, v)
}

// Iteration 3
var items = map3.entries()
p(items) // A MapIterator type

var values = map3.values()
p(values) // A MapIterator type

var keys = map3.keys()
p(keys) // A MapIterator type

// Constructing a map with an iterator
var map4 = new Map(map3.entries())
p(map4)
p(map3 === map4) // false -- Not referencing the same map
