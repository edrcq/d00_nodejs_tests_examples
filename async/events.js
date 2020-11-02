const EventEmitter = require('events').EventEmitter

class EventManager extends EventEmitter {}

const event_manager = new EventManager()

event_manager.on('test_a', (payload) => {
    console.log('test_a', payload)
})

event_manager.emit('test_a', { 
    a: 4,
    hello: 'world'
})



/*
router.express('/signup', (req, res) => {
    ...
    ...
    ..
    event_manager.emit('new_signup', data)
    res.json({})
})
*/