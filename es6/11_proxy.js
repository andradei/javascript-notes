/*
  NOT SUPPORTED on Node yet.

  Proxy is a way to intercept object property access.
  The interceptions are made via "traps".
*/

var p = console.log

var jedi = {
  name: 'Luke',
  weapon: 'Lightsaber',
  attack: target => p('Swings Lightsaber.')
}

// Proxies
var proxy = new Proxy(jedi, {
  // Trap for retrieving property values.
  get: function (target, property) {
    if (property === 'name') {
      return 'Use the force, ' + target[property]
    }
  },
  // Trap for altering property values.
  set: {},
  // There are many other traps not shown here.
})

// Proxy that traps functions.
//                      Function to be trapped
var proxy2 = new Proxy (jedi.attack, { // Object handler
  // `context` is the `this` binding.
  apply: (target, context, args) => p(context.attack(target) + ' and also used the force')
})
p(jedi.name)
jedi.attack()
proxy2.attack()

// Full interception of method with proxy.
jedi.attack = proxy2
jedi.attack()
