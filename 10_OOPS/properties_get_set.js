// so here instead of using the concept of oops
// using the defineProperty of object

function User(email, password){
    
    this._email = email;
    this._password = password;

    Object.defineProperty(this,'email',{
        get: function(){
            return `${this._email}Hacker`
        },
        set: function(value){
            this._email=value
        }
    })

    Object.defineProperty(this,'password',{
        get: function(){
            return this._password;
        },
        set: function(value){
            this._password=value
        }
    })

}

const chai = new User('chai',"chai@iitdh.ac.in")

console.log(chai.email)