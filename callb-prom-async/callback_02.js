function testb(cb) {
    testa(function() {
        console.log('callback from testb')
        cb()
    })
}

function testa(cb) {
    console.log('here we go')
    cb()
}

testb(function() {
    console.log('callback testb - first')
})

function sendMessage(message, done) {
    console.log('Now we send a message... [ Message:', message, ']')
    console.log(message)
    done()
}