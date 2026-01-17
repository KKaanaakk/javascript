// Closires in Javascript
//Lexical Scope

// Global Scope
var name = "KingKanak"

function local(){
    // Local Scope
    console.log(name)
}

local()

// What is Closure?

function test (){
    var name = "KanakKing"
    function displayName (){
        console.log(name)
    }
    return displayName
}

test()()

// Closure Scope Chain

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20


