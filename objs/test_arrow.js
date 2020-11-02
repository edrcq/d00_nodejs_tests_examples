function testArrow() {

    let count = 0

    return {
        sendMessage(msg, done) {
            console.log('Sending msg..', msg)
            setTimeout(() => {
                console.log('msg sent !')
                count++
                done(null, true)
            }, 100)
        },

        sendMessageBis(msg, done) {
            console.log('Sending msg..', msg)
            setTimeout(function() {
                console.log('msg sent !')
                count++
                done(null, true)
            }, 100)
        },

        getCount() {
            return count
        }
    }
}

const testA = testArrow()

console.log(testA.getCount())


testA.sendMessage('coucou', () => {
    console.log('callback ', testA.getCount())

})

console.log(testA.getCount())