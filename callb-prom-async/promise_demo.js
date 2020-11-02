const result = Promise.resolve(15)
console.log(result) // Promise { 15 }

result.then(function(promise_result) {
    console.log(promise_result)
})

function writeLater(msg, time, done) {
    setTimeout(() => {
        console.log(msg)
        done()
    }, time)
}

function writeLaterAsync(msg, time) {
    return new Promise((resolve, reject) => {
        writeLater(msg, time, () => {
            console.log('before resolve')
            resolve()
        })
    })
}

const timeoutPromise = writeLaterAsync('Hello world', 1000)
console.log(timeoutPromise) // Promise { <pending> }
timeoutPromise.then(p_result => {
    console.log('finished')
})

function autoResolve() {
    return new Promise((resolve) => {
        resolve(21)
    })
}

function autoReject() {
    return new Promise((resolve, reject) => {
        reject(new Error('bouh'))
    })
}

