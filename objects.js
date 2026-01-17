// Objects in javascript

const user = {
    name: "kanak",
    age: 25,
    isTotally: true
}
console.log(user)


// How to loop throught each of its keys & print the value
const userOne = {
    name: "kanak",
    age: 25,
    isTotally: true
}
for (key in userOne){
    console.log(userOne[key])
}

// Q - What is the Output

const obj = {
    a: "one",
    b: "two",
    a: "three"
}
console.log(obj)
// { a: 'three', b: 'two' }


// Create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2
const nums = {
    a: 100,
    b: 200,
    title: "three"
}
multiplyByTwo(nums)

function multiplyByTwo(obj){
    for (key in obj){
        if (typeof obj[key] === "number"){
            obj[key] = obj[key] *= 2
        }
    }
}

console.log(nums)


// Q - What is the Output of the following code?

const a = {}
const b = {key: "b"}
const c = {key: "c"}

a[b] = 123
a[c] = 423

console.log(a[b]) //423
console.log(a) //{ '[object Object]': 423 }


// Q - What is JSON.stringify & JSON.parse?

const usertwo = {
    name: "piyush",
    age: 24
}

console.log(JSON.stringify(usertwo)) //{"name":"piyush","age":24}

const strObj = JSON.stringify(usertwo)
console.log(JSON.parse(strObj)) //{ name: 'piyush', age: 24 }

// to add it to local storage
localStorage.setItems("test", strObj)

// Q - Output

console.log([...'Kanak'])//[ 'K', 'a', 'n', 'a', 'k' ]


// Q - Output

const shape ={
    radius: 10,
    diameter(){
        return this.radius * 2
    },
    parimeter: () => 2 * Math.PI * this.radius
}

console.log(shape.diameter()) //20
console.log(shape.parimeter()) //NaN


// Q - What is destructuring in object

const userThree ={
    name: "Kanak",
    age: 25
}
const {name} = userThree
console.log(name) //Kanak