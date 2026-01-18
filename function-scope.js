// Q - Function Scope

var num1 = 20,
num2 = 3,
name = "Kanak"

function multiply(){
    return num1 * num2
}

multiply() // Returns 60

// A nested function example
function getScore(){
    var num1 = 2,
    num2 = 3
    
    function add(){
        return name + "scored" + (num1 + num2)
    }
    
    return add()
}
getScore() // Return "Kanak scored 5"


// --------------------------------

// Q - Function Scope - O/P 

for(let i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i)
    }, i*1000)
}
// 0 1 2 3 4 

// --------------------------------

// Q - Function Scope - O/P 

for(var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i)
    }, i*1000)
}
// 5 5 5 5 5