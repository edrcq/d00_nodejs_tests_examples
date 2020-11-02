let n = 1,
    s = 'string',
    f = false,
    t = true,
    o = {
        name: 'Hey',
        age: 20,
    }

let a = n
n = 2
console.log({ a, n })

let o_copy = Object.assign({}, o)
o_copy.age = 19

o_copy.newstuff = 'hello world'

console.log(o)
console.log(o === o_copy)
console.log(o_copy)