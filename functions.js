// Ques -  What is function declaration?

function nameFunction (num){
    return num*num
}

// --------------------------------

// Ques - What is function expression?
// function which has no name is called anonomous function, which can be assigned to a variable or can be passes as a callback
const square = function (num){
    return num * num
}

// --------------------------------

// Ques - What are First Class Functions?
// In a language where function can be treated as variables their functions are called first class functions

function square(num){
    return num*num
}

function displaySquare(fn){
    console.log("Square is" + " " + fn(5))
}

displaySquare(square)

// --------------------------------

// Q - What is IIFE (Immediately Invoked Function Expression)?
// A function which runs as soon as it is defined is called IIFE

(function square(num){
    return num*num
})(5)

