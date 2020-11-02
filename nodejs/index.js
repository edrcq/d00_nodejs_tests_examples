const store = require('./store')
console.log(store)
const { addition } = require('./utils')
console.log(addition(2, 3))

console.log(store)

console.log('START index.js')

function test() {
    console.log(' test func')
}

const masto = require('./masto')
console.log('masto', masto)

console.log(store)