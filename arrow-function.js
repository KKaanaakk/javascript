// Q - Arrow function vs Regular Function

// 1 - Syntex
function square(num){
    return num * num
}

const squareArrow = (num) => { 
    return num*num
}

// 2 - Implicit "return" keyword

const squareNoReturn = (num) => num*num

// 3 - arguments

//this will work 
function fn(){
    console.log(arguments)
}

// but not with arrow function as you cannot have agrumants keyword inside arrow function
const fn = () => {
    console.log(arguments)
}

fn(1,2,3)

// 4 - "this" keyword


