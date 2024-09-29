// // if
// const isUserloggedIn = true

// if(isUserloggedIn){
//     console.log("User is loggedIn");
// }

// if(2=="2"){
//     console.log("executed");
// }

// if(2==="2"){
//     console.log("not executed");
// }

month = 2

switch(month){
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log('April');
        break;
    default:
        console.log("Other");
        break;
}

// falsy values

// false, 0, -0, BigInt On, "", null, undefined, NaN

// truthy values

// "0",'false', " ", [] , {} ,function(){}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0)
    console.log("Object is empty"); 

// Nullish Coalescing Operator (??): null undefined

// let val1

// val1 = 5 ?? 10

// console.log(val1)

// val1 = null ?? 10

// console.log(val1)

// Terniary Operator

// let iceTeaPrice = 100

// iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80")

// let val2 = null ?? undefined?? NaN ?? 100

// console.log(`${val2}`);

// break and continue same as c++