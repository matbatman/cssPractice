function Human(fn, ln) {
    this.fn = fn
    this.ln = ln
    this.printFullName = function () {
        console.log(this.fn + ' ' + this.ln)
    }
}

let p1 = new Human("J", "D")
let p2 = new Human("K", "R")

//свойства
for (let i in p1) {
    console.log(i + " " + p1[i])
}

//существование в obj
if ("fn" in p1) console.log(p1.fn)
if (p1.printFullName) console.log('printFullName exists')

//экземпляр класса
if ((typeof p2 == "object") && (p2 instanceof Human)) console.log('p2 - экземпляр Human')

//удаление свойства
console.log(delete p2.ln)