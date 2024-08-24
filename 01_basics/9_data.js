let myDate = new Date()

console.log(myDate)

console.log(myDate.toString())

console.log(myDate.toDateString())

console.log(typeof data)

let newDate = new Date(2023, 0 , 23)

console.log(newDate.toLocaleString());

console.log(newDate.getTime()); // also getday, months etc

console.log(Math.floor(Date.now()/1000));

newDate.toLocaleString('default',{
    weekday: "long"
})