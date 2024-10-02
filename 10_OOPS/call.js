// complete concept of how call works
function SetUsername(username){
    // complex DB calls
    // here this is context of SetUsername
    // so when the call ends it exit from the call stack
    // and the context of createUser is not affected 
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    // SetUsername(username);
    SetUsername.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@iitdh.ac.in",123)

console.log(chai)