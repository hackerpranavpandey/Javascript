// there are multiple phases in which the execution of code take place

function one (num1, num2) {

    function two (num1,num2){

        function three (num1, num2) {

            return num2 + num1;
        }

        return three(num1,num2);
    }

    return two (num1,num2);
}
console.log(one(100000,100000));