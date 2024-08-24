// Primitive

// 7 types : String, Number, Boolean , null, undefined, symbol
// Bigint
// they are always called by value

// Reference 9 (Non primitive)

// Arrays, Objects , Functions

// javascript is a dynamic type defined languaga
// so e don't need tot define the type of any variable

// something strange about symbol

const id="123";
const anotherId="123"
console.log(id==anotherId)

// but the case when we do
// Even with same description
// each time a symbol is unique and immutable
console.log(Symbol(id)==Symbol(anotherId))

const bigNumber = 3467475578789855n
// arrays
const heros = ["shaktiman","naagraj","doga"]
// objects
let myObj = {
    name : "Tanisha Singh",
    age:21,
    college:"KIT"
}

const myFunction = function (){
    console.log("Hello World")
}

myFunction()

console.log(myObj)
console.log(myObj.name)

console.table([typeof bigNumber, typeof heros,typeof myFunction,typeof myObj])

// here array is also trated as object only difference lies in the indexing

// adding elements

heros.push(10)

myObj.d = 20

console.log(heros)

console.log(myObj)