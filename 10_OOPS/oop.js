// const user = {
//     username: "Tanisha",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: () => {
//         console.log(`Username: ${this.username}`);
//         console.log(this)
//     }
// }
// console.log(user.getUserDetails());

const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = ()=>{
        console.log(`Welcome ${this.username}`)
    }
    return this
}

// const userOne = User("Tanisha",12, true)
// const userTwo = User("Pranidhi",10,false)
// console.log(userOne)

// so use new keyword

const userOne = new User("Arista",20, true)

const userTwo = new User("CRED",60,true)

// console.log(userOne)

// console.log(userTwo)

console.log(userOne.constructor)

console.log(userTwo.constructor)

if(userOne.constructor === userTwo.constructor){
    console.log("both are same constructor")
}

const newHero = [1,2,3,4,5,6,7,8,9,10]
console.log(newHero)