// arrow function , implicit return and explicit return

//  const addTwo = (num1, num2) => {
//     return num1 + num2;
//  }

//  console.log(addTwo(10,10));

//  const addTwo = (num1, num2) => num1 + num2

//  console.log(addTwo(0,0));

const addOne = (num1 , num2) => (
    num1 + num2 
)

console.log(addOne(100,200));

const message = (num1, num2) => (
    // username = "Tanisha" 
    // to return object
    { user : "Tanisha" }
)

console.log(message(100,100).user);