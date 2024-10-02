// ES6 

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username}.toUpperCase()`
//     }
// }

// const chai = new User("chai","chai@iitdh.ac.in","123")

// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())

// behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(password){
    return `${password}abc`
}

User.prototype.changeUsername = function(username){
    return `${username.toUpperCase()}`
}

const tea = new User("tea","tea@iitdh.ac.in","321")

console.log(tea)
console.log(tea.encryptPassword(tea.password))
console.log(tea.changeUsername(tea.username))