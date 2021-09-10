let reg = new RegExp("abc[de]", "g")
let str = "abc, abcd, abce, abcf"

console.log(str.search(reg))

let M = []

M = str.match(reg)
console.log(M)
for (let i = 0; i < M.length; i++) {
    console.log(M[i] + " ")
}

let S = str.replace(reg, "match")
console.log(S)