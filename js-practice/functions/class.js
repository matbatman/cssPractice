class Human {
    constructor(year, hname) {
        this.year = year
        this.hname = hname
    }
    static displayName = "Человек"
}

const p1 = new Human(1996, "D")
console.log(p1.displayName) // undefined
console.log(Human.displayName) // Человек