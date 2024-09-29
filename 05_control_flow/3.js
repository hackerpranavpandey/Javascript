// for in loop
// mostly used wit onjects and all

const myObject = {
    userName : "Tanisha",
    age : 20,
    sex : "Female"    
}

for(const key in myObject){
    console.log(`the key in the is ${key} -> ${myObject[key]}`)
}

// for the case of arrays

const coding = ["C","c++","Python","Java","Javascript"]

// for(const key in coding){
//     console.log(`${key}`);
// }

// to print the values

for(const key in coding){
    console.log(`${coding[key]}`);
}

// forEach loop

coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
})

// databases comes in form of array

const myArray = [
    {
        language: "C++",
        name : "IIT"
    },
    {
        language:" JavaScript",
        name : "IIT"
    }
]

myArray.forEach((item) => {
    console.log(item.language);
})