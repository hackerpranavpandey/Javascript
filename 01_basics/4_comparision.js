// here we will see how dofferent comparision operator works
//in typescript we cannot compare different datatype so ensure the comparision of same datatypes
// same things like > , < , >= , <= and == operators are there
// some special cases are there
console.table([null > 0 , null == 0, null >= 0]) // false , false , true
console.table([undefined > 0 , undefined == 0, undefined >= 0]) // all false

// strict check concept using ===

console.log("2"==2) // true
console.log(2==="2") // false