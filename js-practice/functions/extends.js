class Human {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`${this.name} speaks`)
    }
}

class Person extends Human {
    constructor(name) {
        super(name)
    }

    speak() {
        console.log(`${this.name} speaks`)
    }
}
let p = new Person('Peter')
p.speak()