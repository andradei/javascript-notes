/*
ES6 syntactic sugar for inharitance
*/

// Supported only inside strict mode so far.
(function () {
  'use strict'
  // jshint esnext:true
  class Animal {
    constructor (voice) {
      this.voice = voice || 'grunt'
    }

    speak () {
      console.log(this.voice)
    }
  }

  class Cat extends Animal {
    constructor (name, color) {
      super('Meow')
      this.name = name
      this.color = color
    }
  }

  var hulk = new Cat('Hulk', 'Black & White')

  console.log(hulk)
  hulk.speak()
})()
