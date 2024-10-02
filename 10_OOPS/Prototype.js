let myName = "Pranav       "

console.log(myName.length)

//so all object either string array or function will have this prototype

Object.prototype.hitesh = () => {
    console.log("hitesh function called!")
}

myName.hitesh()

const myArray = ["thor","spiderman"]

// only arrays will have this prototype

Array.prototype.heyVertika = () => {
    console.log(`I am Vertika`)
}

myArray.heyVertika()

// myName.heyVertika()  // error here since the prototype is only for array not for the strings

console.log(myName.length)

// lets define a prototype for the correct length of any string

String.prototype.trueLength = function ()  {
    console.log(`${this}`)
    console.log(`${this.trim().length}`)
}

myName.trueLength()
"hello".trueLength()
"world".trueLength()