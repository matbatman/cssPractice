function sumArgs() {
    let r = 0
    for (let i = 0; i < arguments.length; i++) r = r + arguments[i]
    return r
}

console.log(sumArgs(1, 4, 5))