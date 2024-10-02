const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network call or req
    setTimeout(function(){
        console.log('Async task is complete');
        resolve(100)  // connect with .then
    }, 1000)
})

promiseOne.then(function(val){
    console.log(`Promise consumed ${val}`);
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async task 2 consumed")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Tanisha", password: "123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// chaining concepts
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((err)=>{     
    console.log("Damn error")  ;  
})
// will be executed always either there is error or not
.finally(() => {   
    console.log("the promise is either resolved or rejected")
})

// now using async await concept
// so there is two way to write the code 
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javaScript", password: "123"})
        }
        else{
            reject('ERROR: Js went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    // ensure to use try catch properly
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

consumePromiseFive()
