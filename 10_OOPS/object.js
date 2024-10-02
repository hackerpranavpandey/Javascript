function multipleBy5(num){
    this.num=num
    return num*5
}

multipleBy5.power=100

// everything in Js is object

console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype)

function createUser(username,score){
    this.username=username;
    this.score=score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.print = function(){
    console.log(`price is ${this.score}`);
}


// const chai = createUser("chai", 25)

// const tea = createUser("tea", 250)

// correct method to define prototype using new
const chai = new createUser("chai", 25)

const tea = new createUser("tea", 250)

chai.print()

chai.increment()

chai.print()

for(let i=0;i<250;i++){
    tea.increment();
}

tea.print()