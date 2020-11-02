const store = require('./store')
console.log('START utils.js')

const multiply = function(x, y) {
    store.lastMulti = x * y
    return x * y
}

function addition(x, y) {
    store.lastAdd = x + y
    return x + y
}

console.log('END utils.js')

// module.exports = {
//     addition: addition,
//     multiply: multiply,
// }

exports.addition = addition
exports.multiply = multiply

