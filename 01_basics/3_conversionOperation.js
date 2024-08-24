// so here we will learn to convert datatypes
// mosrt of the time browser gives value in strings
// so we need to convert them to array, num ,boolean
let score = "33abc"

// const {score} = req.boy 

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number (score)
// valueInNumber = Boolean (score) // true here
console.log(typeof valueInNumber)
console.log(valueInNumber)
// some conversion in javascript
// "33" => 33
// "33abc" => NaN
// Null => 0
// true => 1 ; false => 0
// "" =>false

// concept of string to number
// string is simple addition as in

console.log(+"") // 0
console.log(+true) // 1
// simple string and number operations
// each of them will be a string
console.log("2"+2)
console.log(2+"2")
console.log(1+4+"2"+2+"2") // goes start -> end