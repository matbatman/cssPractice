function Human(fn, ln) {
    this.fn = fn
    this.ln = ln
}

Human.prototype.getName = function () {
    let name = this.fn + ' ' + this.ln
    return name
}

let p1 = new Human("A", "B")
console.log(p1.getName())