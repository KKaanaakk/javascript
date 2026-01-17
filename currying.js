// Currying in Javascript
// Example from f(a ,b) into f(a)(b)

function f(a){
    return function(b){
       return `${a} ${b}`
    }
}

console.log(f(5)(6))

// Q - sum(2)(6)(1)

function f(a){
    return function(b){
        return function(c){
           return `${a+b+c}` 
        }
    }
}

console.log(f(2)(6)(1))

/* Q - 
evaluate("sum")(4)(2) => 6
evaluate("multiply")(4)(2) => 8
evaluate("divide")(4)(2) => 2
evaluate("subtract")(4)(2) => 2
*/

function evaluate(operator){
    return function(a){
        return function(b){
            if (operator === "sum") return a + b
            else if (operator === "multiply") return a * b
            else if (operator === "divide") return a / b
            else if (operator === "subtract") return a - b
            else return "Invalid"
        }
    }
}

console.log(evaluate("subtract")(4)(2))

// Q - Infinite Curryng

function add(a){
    return function(b){
        if (b) return add(a + b)
        else return a
    }
}

console.log(add(2)(3)(4)(6)(7)())