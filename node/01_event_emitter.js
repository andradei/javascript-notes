const EventEmitter = require('events')

function handle (name) {
  var emmiter = new EventEmitter()

  return emmiter
}

var handler = handle('Zaratustra')

handler.on('start', () => console.log('Started event.'))
handler.on('data', data => console.log('Data event with data: ' + data))
handler.on('end', () => console.log('Ended event.'))
