// concept of filter

const nums = [1,2,3,4,5,6,7,8,9,10]

const newNums = []

// const newNum1 = nums.filter((num) => {
//     return num > 4
// })

nums.forEach((num)=>{
    if(num > 4)
        newNums.push(num);
})

newNums.forEach((num) => {
    console.log(num);
})