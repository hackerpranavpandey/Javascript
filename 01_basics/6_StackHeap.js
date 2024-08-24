// here simple concept of stack and heap is used
// so when we declare any variable it is either through the concept of stack of heap
// for case any string is using stack
// stack -> value
// heap -> ByReference
let her="Tanish"
let her_2=her
her_2="Tanisha Singh is good girl" // no change
console.table([her,her_2])  
let myObj = {
    name : "Tanisha",
    age:22
}
let myObj2 = myObj; // myObj2 gets by reference
console.table([myObj,myObj2]);
myObj2.name="Tanisha Singh"  // change myObj also
console.log(myObj.name)