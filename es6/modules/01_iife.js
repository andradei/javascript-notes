/*
  IIFE - Immediately Invoked Function Expression.
  They provide "module" functionality as in atomicity (you import all or nothing), and as in
  controlling visibility (the capability of making implementation details private).

  Modules and IIFEs also prevent creation of global properties.
*/

var p = console.log

var workers = []

// This module adds an Employee object into the array.
;(function (target, value) {
  // This object is hidden from all other scopes and can't be modified.
  var Employee = {
    name: value,
    setName: name => this.name = name,
    work () {
      p(this.name + ' is working.')
    }
  }

  target.push(Employee)
})(workers, 'Nic')

p(workers)
