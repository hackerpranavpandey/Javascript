// here we will have the case lets say that we don't know that how much of the item will be ourchsed by user
// so in that case what are the paramenters that needs tot be passed
// so there we need to pass it such that it works for all number of items
// this is knownn as rest operator
function calculateCartPrice(...num){
    return num;
}
console.log(calculateCartPrice(100,200,300,400));
// now lets learn how can we handle object and pass it to any function
const user = {
    username: "hitesh",
    price: 199
}

// now passing the bject to any function and then access the username as well as price
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
// but think of case if the prices in object is changed to prices
// so these things need to be handles in js
// such checking automatically happens in typescript

// below is how a function aceept array and return its 2nd value
function returnSecondValue(arr){
    return arr[1];
}
myNewArray=[1,2,2,1000,198,1000];
console.log(returnSecondValue(myNewArray));
