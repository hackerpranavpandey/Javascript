class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username; ${this.username}`)
    }

    // static keyword is like all the instance of class
    // cannot access it

    static createId(){
        return "123"
    }
}

const hitesh = new User("hitesh")

// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phone.com")

// console.log(iphone.createId())