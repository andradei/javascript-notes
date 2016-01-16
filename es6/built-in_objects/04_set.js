/*
  Set is a collection of unique items.
*/

'use strict'

function p (...content) {
  console.log(...content)
}

// Create an empty set.
var set = new Set()
p(set.size) // size 0  means empty :O

// Add items to set.
set.add('Hello')
set.add(10)
set.add(9)
set.add(10) // Duplicates aren't kept
set.add('World')
p(set, set.size) // 4

// Delete items from set.
set.delete(10)
p(set)

// Check whether an item is in the set.
p(set.has(10)) // false
p(set.has(9)) // true

// Construct set from an array.
var set2 = new Set([1, 1, 2, 2, 3, 3, 4])
p(set2) // Unique items are kept. Duplicates are removed

// Iteration 1
for (let s of set2) {
  p(s)
}

// Iteration 2
set2.forEach(i => p(i))

// Iteration 3
var entries = set2.entries()
var next = entries.next().value
p(next) // [1, 1] -- Iterators return `[key, value]`, but in this case its `[item, item]`

var values = set2.values()
next = values.next().value
p(next) // 1

// Duplicating a set.
var copy = new Set(set2.values())
p(copy) // Copies of the values are made, not copies of references
