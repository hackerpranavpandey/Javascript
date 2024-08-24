const myArray=new Array(1,2,3,4,5,"hello",7,8)

// console.log(myArray)

// console.log(typeof myArray)

// // Array methods

// myArray.push(6)

// console.log(myArray)

// myArray.pop()

// console.log(myArray)

// myArray.unshift(8)

// console.log(myArray)

// console.log(myArray.indexOf(10))

// const newArray = myArray.join() // to string

// console.log(myArray)

// console.log(newArray)

// console.log(typeof newArray)

// slice, splice ntice the difference

console.log("A ", myArray)

const t_1 = myArray.slice(1,3)

console.log(t_1);

console.log("B", myArray)

const t_2 = myArray.splice(1,3)

console.log(t_2)

console.log(myArray)