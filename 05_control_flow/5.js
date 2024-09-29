// filter on books data
// maps and chaining concepts

const myBook = [
    {
        title : "Boom One" , genre : 'Science' , publish : 2009 , edition: 2000 
    } ,
    {
        title : "Boom Two" , genre : 'Maths' , publish : 1995 , edition: 1990 
    } ,
    {
        title : "Boom Three" , genre : 'English' , publish : 2006 , edition: 2010 
    } ,
    {
        title : "Boom Four" , genre : 'Science' , publish : 2009 , edition: 2020 
    } ,
    {
        title : "Boom Four" , genre : 'Kannad' , publish : 2009 , edition: 2008
    } ,
    {
        title : "Boom Five" , genre : 'Science' , publish : 2009 , edition: 2024
    } 
]

const userBook = myBook.filter((bk) => bk.genre === 'Maths' && bk.edition===1990)

console.log(userBook)

const myArray = [1,2,3,4,5,6,7,8,9,10]

let newArray = myArray.map((num) => num*10)

// console.log(newArray)

newArray = myArray.map((num) => num + 1).map((num) => num+1).filter((num) => num>=2)

console.log(newArray)