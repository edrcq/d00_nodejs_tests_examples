function consoleLog() {
    console.log('Hello ! later')
}

setTimeout(consoleLog, 1000)

setTimeout(consoleLog, 995)

console.log('Hello now')
// ...
