const course = {
    coursename: "javascript complete concepts",
    price:"999",
    courseInstructor : "hitesh"
}

// destructuring  
const {courseInstructor: instructor} = course

console.log(instructor)

// jason format data from apis
// {
//     "name": "javascript complete concepts",
//     "price":"999",
//     "courseInstructor" : "hitesh"
// }