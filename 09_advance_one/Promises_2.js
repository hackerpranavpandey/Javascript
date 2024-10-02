// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // const data=response.json()
//         // it lso takes some time so need to wait
//         const data = await response.json();
//         console.log(data)
//         console.log("Welcome to the world of Asynchronous JavaScript Programming")
//     }
//     catch{
//         console.log(error)
//     }
// }

// getAllUsers()

// simple and easy way no need of try catch
fetch ('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})