const fs = require('fs')

const util = require('util')

const readFileAsyncBis = util.promisify(fs.readFile)

// fs.readFile('demo.txt', (err, result) => {
//     if (err) {
//         return console.error(err)
//     }
//     console.log('File OK!')
//     console.log(result.toString())
// })


function readFileAsync(path) {
    return new Promise((resolve, reject) => {

        

        fs.readFile(path, (err, result) => {
            if (err) {
                return reject(err)
            }
            //reject('TEST REJECT')
            resolve(result)
        })
    })
}

function promisify(fn) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (err,result) => {
                if(err){
                    reject(err)
                }
                resolve(result)
            })
        }).catch()
    }
}

const newReadFile = promisify(fs.readFile)

newReadFile('demo.txt')
    .then(r => {
        console.log(r.toString())
    })
    .catch(err => {
        console.error(err)
    })