// call in javascript (Explicit Binding)
// Q - What is call?

var obj = {
    name: " Kanak"
}

function sayHello(age){
    return "Hello" + this.name + age
}

console.log(sayHello.call(obj, 24)) // Hello Kanak24

// -------------------------------------------------

// Q - What is Apply?

var obj = {
    name: " Kanak"
}

function sayHello(age, proff){
    return "Hello" + this.name + age + proff
}

console.log(sayHello.apply(obj, [24, "SDE"])) // Hello Kanak24SDE

// -------------------------------------------------

// Q - What is Bind?

var obj = {
    name: " Kanak"
}

function sayHello(age, proff){
    return "Hello" + this.name + age + proff
}

const binfFunc = sayHello.bind(obj)

console.log(binfFunc(24, "SDE"))
console.log(binfFunc(30, "Tech Lead"))

// -------------------------------------------------

// Q - Call with function inside object?

const age = 10

var person = {
    name: " Kanak",
    age: 25,
    getAge: function (){
        return this.age
    }
}

var person2 = {age: 24}
console.log(person.getAge()) //25
console.log(person.getAge.call(person2)) //24
console.log(person.getAge.bind(person2)())// [Function: bound getAge]
console.log(person.getAge.bind(person2)()) // 24

// -------------------------------------------------

// Q - Output?

var status = "cool"

setTimeout(() =>{
    const status = "Love"
    
    const data = {
        status: "Banana",
        getStatus: function(){
            return this.status
        }
    }
})

console.log(data.getStatus()) // Banana
console.log(data.getStatus.call(this)) // Cool

// -------------------------------------------------

// Q - Call printAnimals such that it prints all animals in object

const animals = [
    {species: "lion", name: "king"},
    {species: "whale", name: "queen"},
]

function printAnimals(i){
    this.print = function(){
        console.log("#" + i + " " + this.species + ": " + this.name)
    }
    this.print()
}

for(let i = 0; i < animals.length; i++){
    printAnimals.call(animals[i], i)
}
// #0 lion: king
// #1 whale: queen

// -------------------------------------------------

// Q - Append an array to another array

const array = ["a", "b"]
const elements = [0, 1, 2]

array.push.apply(array, elements)

console.log(array) // [ 'a', 'b', 0, 1, 2 ]

// -------------------------------------------------

// Q - Find min/max in an array

const elementss = [3, 4, 5, 6, 7]

console.log(Math.min.apply(null, elementss)) //3
console.log(Math.max.apply(null, elementss)) //7

// -------------------------------------------------

// Q - Bind Chaining

function f(){
    console.log(this)
}

f = f.bind({name: "John"}).bind({name: "Ann"})

f() // { name: 'John' }