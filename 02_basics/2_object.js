// singleton object
const tinderUser = new Object()

// console.log(tinderUser)

// no singleton object no difference

// const t={}

// console.log(t)

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn=false
// console.log(tinderUser)
// so we saw two ways of declaring objects

// object inside object

const regularUser={
    email: "220010043@iitdh.ac.in",
    fullName: {
        first: "Pranav",
        Second: {s:"Kumar"},
        Last: "Pandey"
    }
}

// console.log(regularUser.fullName.Second.s)

// combining objects

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}

// below will give correct result but the problem is that entire things goes into obje 1 first 

// const obj3 = Object.assign(obj1,obj2)

// preferred way

// const obj3 = Object.assign({},obj1,obj2)

// but better way is spread operator
const obj3 = {...obj1,...obj2}

console.log(obj3)

// so we can extract keys and values from any objects

console.log(Object.keys(tinderUser))