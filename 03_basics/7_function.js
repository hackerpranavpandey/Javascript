 console.log(this) // empty

 const user = {
     username : "hitesh" ,
     price : 200 ,
     welcomeMessage : function () {
         console.log(this);
         console.log(`${this.username} welcome to website`);
     }
 }

 console.log(this)

 user.welcomeMessage()

 user.username = "Rahul"

 user.welcomeMessage()

 // using this keyword inside a function

 const chai = function () {
    console.log(this.username);
 }
 
 // it will say udefined
 
 chai() 