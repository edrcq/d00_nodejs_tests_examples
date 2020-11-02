function promisify(fn) {
    return function(...subargs) {
        return new Promise((resolve, reject) => {
            fn(...subargs, (err, result) => {
                if (!err) {
                    return resolve(result)
                }
                else {
                    return reject(err)
                }
            })
        })
    }
}

const fs = require('fs')

const readFile = promisify(fs.readFile)

readFile('demo.txt').then(r => {
    console.log(r.toString())
})