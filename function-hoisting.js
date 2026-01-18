// Q - Function Hoisting

// functions are hoisted completely
functionName()

function functionName(){
    console.log("Kanak King")
}

// --------------------------------

//  Q - Function Hoisting - O/P

var x = 21

var fun = function(){
    console.log(x)
    var x = 20
}

fun() // undefined


