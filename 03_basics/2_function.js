// simple user login function with default value

function loginUser(username = "Tanisha"){
    if(username){
        return `${username} just logged in`;
    }
    return "not a valid user";
}
console.log(loginUser())