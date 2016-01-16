// This is the default export.
// It means that this is the only export possible in the file.
// The other exports won't work.
// And the import is made without destructuring.
export default function makeJoke () {
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
