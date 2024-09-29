// concept of reduce here

const myArray = [1,2,3,4,5,6,7,8,9,10]

const myTotal = myArray.reduce(function(acc,currval){
    console.log(`acc: ${acc} , currval: ${currval}`);
    return acc+currval
},0)

// use case 

shoppingCart = [
    {
        item1:'C++',
        price:100
    },
    {
        item2:"JavaScript",
        price:200
    }
]

const bollToPay=shoppingCart.reduce((acc,item) => item.price + acc ,0 )

console.log(bollToPay)