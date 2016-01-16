function printThree (a, b, c) {
  console.log(a, b, c)
}

// Spread the elements of an array into separate values
printThree(...['JS', 'spread', 'operator.'])
var arr = [1, 2]
printThree(0, ...arr)

// Push one array into another
var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]

arr1.push(...arr2)
console.log(arr1)
