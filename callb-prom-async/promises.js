// setTimeout(() => console.log("Tick"), 500);

let quinze = Promise.resolve(15);
console.log(quinze)
quinze.then(value => console.log(value))

function waitOneTick(time, done) {
    setTimeout(() => {
        console.log("Tick");
        done();
    }, time);
}

function waitOneTickPromise(time) {
    return new Promise(resolve => {
        waitOneTick(time, result => resolve(result))
    })
}

const wpro = waitOneTickPromise(500)
console.log(wpro)
wpro.then(r => {
    console.log('Promise finished')
})


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