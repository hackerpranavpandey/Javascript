// this file talks about the scope
// how does global and block scope
// so {} = scope
// error if a and c redeclared inside if using var
let a=100;
var b=200;
const c=1000;
if(true){
    // here this c and a are different but not b
    const c=100;
    // var c=100; // error also for a
    var b=100;
    let a=400;
    console.log(a); // local a is prioritized
}
console.log(a);
console.log(b);
console.log(c);