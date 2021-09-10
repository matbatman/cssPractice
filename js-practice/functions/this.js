class Human {
    scream() {
        return this
    }
    static listen() {
        return this
    }
}

let obj = new Human()
console.log(obj.scream()) // Human {}

let scream = obj.scream
console.log(scream()) // undefined

console.log(Human.listen()) // [Function: Human]

let listen = Human.listen
console.log(listen) // [Function: listen]