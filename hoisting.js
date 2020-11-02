function test1(a) {
    console.log('a', a)

    return function multiply(b, c) {
        console.log('a count:', a++)
        return (b * c)
    }

}

const func_mul = test1(0)
var result = func_mul(2, 4)
console.log({ result })

result = func_mul(2, 4)
console.log({ result })

result = func_mul(2, 4)
console.log({ result })