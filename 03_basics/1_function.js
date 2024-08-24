function add (number1,number2){
    if(typeof number1 ===  "number" && typeof number2 === "number")
        return number1 + number2
    else
        return 0
}

const t1=add(100,20)
const t2=add(2,"3")
const t3=add(10,null)
const t4=add(0,undefined)
console.table([t1,t2,t3,t4])