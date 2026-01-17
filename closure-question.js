// Interview Questions
// Q - What will be logged to console?

let count = 0
function printCount(){
    if (count === 0){
        let count = 1
        console.log(count)
    }
    console.log(count)
}

printCount() // 1 0


// Q - Write a function that allows you to do this

var addSix = createBase(6)
addSix(10) //return 16
addSix(21) //return 27

//sol:
function createBase(num){
    return function(innerNum){
        console.log(num + innerNum) 
    }
}

// Q - Time Optimization
//before optimization
function find(index){
    let a = []
    for(let i = 0; i < 1000000; i++){
        a[i] = i * i
    }
    console.log(a[index]) 
}

console.time("2")
find(2)
console.timeEnd("2")
console.time("8")
find(8)
console.timeEnd("8")

//output: 
// 4
// 2: 34.246ms
// 64
// 8: 26.548ms

//after optimization using closure
function find(){
    let a = []
    for(let i = 0; i < 1000000; i++){
        a[i] = i * i
    }
    return function (index){
       console.log(a[index]) 
    }
}
const closure = find()

console.time("2")
closure(2)
console.timeEnd("2")
console.time("8")
closure(8)
console.timeEnd("8")

//output:
// 4
// 2: 2.447ms
// 64
// 8: 0.07ms


// Q - Block Scope and setTimeout
// Print 0 1 2 without let
function a(){
    for(var i = 0; i < 3; i++){
        (function closure(x){
            setTimeout(function log(){
            console.log(x) 
        }, 1000)   
        })(i)
    }
}
a()