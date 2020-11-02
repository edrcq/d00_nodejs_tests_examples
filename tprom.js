const EventEmitter = require('events').EventEmitter
const readline = require('readline')
class EventManager extends EventEmitter {}
const eventManager = new EventManager()

eventManager.on('key', (payload) => {
    console.log(payload)
})

readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)

process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
        process.exit()
    }
    else {
        eventManager.emit('key', { str, key })
    }
})
