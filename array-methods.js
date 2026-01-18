// map, filter and reduce 
// What is map()?

const num = [1, 2, 3, 4]

const multiplyThree = num.map((num, i, arr) => {
    return num*3
})

console.log(multiplyThree)
// [ 3, 6, 9, 12 ]

// ---------------------------------------------------
// What is filter()?
const moreThanTwo = num.filter((num, i, arr) => {
    return num > 2
})

console.log(moreThanTwo)
// [ 3, 4 ]

// ---------------------------------------------------

// What is reduce()?

const sum = num.reduce((acc, curr, i, arr) => {
    return acc + curr
})

console.log(sum)
// 10

// ---------------------------------------------------

// Diff b/w map & forEach

const arr = [1, 2, 3, 4]

const mapResult = arr.map((ar) => {
    return ar + 2
})

const forEachResult = arr.forEach((ar) => {
    return ar + 2
})
// Instead...
const forEachResultOg = arr.forEach((ar, i) => {
    arr[i] = ar + 2
})

console.log(mapResult, forEachResult, arr)
// [ 3, 4, 5, 6 ] undefined [ 3, 4, 5, 6 ]

//As forEach is not an array function we cannot chain other array functions to it