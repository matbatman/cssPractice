function map(f, a) {
    let res = []
    for (let i = 0; i != a.length; i++) {
        res[i] = f(a[i])
    }
    return res
}

let f = function (z) {
    return z * z * z
}

let nums = [0, 5, 7, 9, 12]
let cube = map(f, nums)
console.log(cube)

let sum = (a, b) => a + b
console.log(sum(2, 8))