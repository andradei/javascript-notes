/*
  The representation of a future value that isn't ready yet.
  It is a mechanism that lets programs listen to events on function calls.
*/

'use strict'

// THIS EXAMPLE WAS SOLVED WITH GENERATORS ON iterators_and_generators/02_generators.js

// Return a promise to operate on instead of an actual value.
// The promise object is an event listener that will notify when the operation is done executing.
function getData (d) {
  // A Promise takes a function with two arguments. The 1st is called to notify it finished
  // successfully. The 2nd is called to notify there was an error.
  // Only one of the two (`resolve` and `reject`) will be called.
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(d) // `resolve()` passes the value `d` as the successful result of this promise
    }, 1000)
  })
}

// Don't forget to declare a variable in the outer-most scope
var x

// Get a promise back and wait for it to return after 1 sec.
getData(10).then(function (num1) {
  x = 1 + num1
  return getData(30)
// THEN takes the data that was passed to `resolve()` out of the promise as the successful result.
}).then(function (num2) { // A promise was returned, to `then()` can be chained
  var y = 1 + num2
  return getData('Meaning of life: ' + (x + y))
}).then(function (answer) { // A promise was returned, to `then()` can be chained
  console.log(answer)
})

// -----------------------------------------------------------------------------------------------

// Promise the automatically resolves.
var resolved = Promise.resolve('Auto-resolved')
var promise = Promise.resolve(resolved)
promise.then(function (data) {
  console.log(data) // 'Auto-resolved'
})

// Promise that automatically rejects.
var rejected = Promise.reject(Error('Auto-rejected'))
rejected.catch(function (error) {
  console.log(error.message) // 'Auto-rejected'
})

// -----------------------------------------------------------------------------------------------

// Example of chaining:

function getOrder (orderID) {
  console.log(`Retrieving user with order #${orderID}`)
  return Promise.resolve({userID: 1})
}

function getUser (userID) {
  console.log(`Retrieving company for user ID ${userID}`)
  return Promise.resolve({companyID: 10})
}

function getCompany (companyID) {
  console.log(`Retrieving company with ID ${companyID}`)
  return Promise.resolve({name: 'Zions JS'})
}

getOrder(3).then(function (order) {
  return getUser(order.userID)
}).then(function (user) {
  return getCompany(user.companyID)
}).then(function (company) {
  console.log(company.name)
}).catch(function (error) {
  console.log(error.message)
})

// -----------------------------------------------------------------------------------------------

// Example of waiting for a iterable of promises:

function getOrder2 (orderID) {
  var orders = {
    1: 'Table',
    2: 'Notebooks',
    3: 'Tablet'
  }

  return Promise.resolve(orders[orderID])
}

var orderIDs = [1, 2, 3]
var promises = []

for (let i in orderIDs) {
  promises.push(getOrder2(orderIDs[i]))
}

// This will resolve as soon as all promises resolve. And reject is ANY of them rejects.
Promise.all(promises).then(function (values) {
  console.log(values)
})

// This will resolve as soon as ONE OF THE promise in the iterable resolves.
Promise.race(promises).then(function (value) {
  console.log(value)
})
