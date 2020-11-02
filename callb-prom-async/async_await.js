const fs = require('fs')
const process = require('process')
const util = require('util')
const readFileAsync = util.promisify(fs.readFile)

async function hello() {
    let count = 10, arr = []

    while (count > 0) {
        const res = await readFileAsync('demo.txt')
        arr.push(res.toString())
        count--
    }
    
    console.log(arr)

    // const new_arr = await Promise.all(arr)
    // const str_arr = new_arr.map(el => el.toString())
    // console.log(str_arr)
}

hello()
