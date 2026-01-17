// "this" keyword in javascript(Implicit binding)   
// explain 'this' keyword?

let user = {
    name:"kanak",
    age: 56,
    getDetails(){
        console.log(this) // { name: 'kanak', age: 56, getDetails: [Function: getDetails] }
        console.log(this.name) // kanak
    }
}

user.getDetails()

// ------------------------------------------------

let userTwo = {
    name:"kanak",
    age: 56,
    childObj: {
        newName: "JoshiJi",
        getDetails(){
        console.log(this.name, "&", this.newName) //undefined & JoshiJi
    }
    }
}

user.childObj.getDetails()

// ------------------------------------------------

// Output
const userThree = {
    name: "kanak",
    logMessage(){
        console.log(this.name)
    }
}
setTimeout(userThree.logMessage, 1000) //undefined
setTimeout(function(){
    userThree.logMessage()
}, 1000) // Kanak

// ------------------------------------------------

// Output
const userFour = {
    name: "kanak",
    greet(){
      return `Hello, ${this.name}!`
    },
    farewell: () => {
      return `Goodbye, ${this.name}!`
    }
}

console.log(userFour.greet()) // Hello, kanak!
console.log(userFour.farewell()) // Goodbye, undefined!

// ------------------------------------------------

// Create a Object Calculator
let calculator = {
    read(){
        this.a = +prompt("a = ", 0)
        this.b = +prompt("b = ", 0)
    },
    sum(){
        return this.a + this.b
    },
    mul(){
        return this.a * this.b
    }
}

calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())

