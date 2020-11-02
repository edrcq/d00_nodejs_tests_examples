/* Quel sera l'ordre ? */
console.log('A')

function theCallback() {
    console.log('E')
}

function test_callback_hell(cb) {
    console.log('B')
    cb()
    console.log('C')
}

console.log('D')

test_callback_hell(theCallback)






