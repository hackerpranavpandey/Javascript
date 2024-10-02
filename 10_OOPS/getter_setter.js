// all about getter ans setter

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    // to avoid the issue of maximum stack size call

    // just simple make password to _password

    // name of method and value should be same
    
    get password(){
        return `${this._password}IronMan`;
    }

    set password(value){
        this._password=value;
    }

}

const hitesh = new User("h@hitesh.ai","123")

console.log(hitesh.password)