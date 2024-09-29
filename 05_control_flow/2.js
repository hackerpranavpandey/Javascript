// for of 
// const myArray = [1,2,3,4,5]

// for(const num of myArray){
//     console.log(num);
// }

// let string = "I LOVE CRED"

// for(const c of string){
//     console.log(c);
// }

// Maps

// object that holds key-value pair

const map = new Map()

map.set("INDIA","New Delhi")

map.set("US","WAshington Dc")

map.set("France","Paris");

console.log(map)

// dereferencing of map

for( const [key,value] of map){
    console.log(` the value of the ${key} : ${value}`)
}