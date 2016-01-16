// JavaScript is single-threaded and asynchronous by nature.

// This won't block for 5 seconds. Didn't even need a thread to not block.
setTimeout(function () {
  console.log('Timeout done.')
}, 5000)

// Will be reached and executed first.
console.log('Told ya, async.')
