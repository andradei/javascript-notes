// This function can be exported with the `import ... from ...` construct.
export function makeJoke () {
  return 'I try! and try! But sometimes I do Err.'
}

// Not exported. Trying to import `obj` in another file will throw an error.
var obj = {
  name: 'Obj',
  exported: true
}

export function makeObj () {
  return obj
}
