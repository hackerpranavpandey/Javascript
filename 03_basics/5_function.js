// nested scope or closure concepts here
// so a function inside a function is local scope
function one(){

    const username = "tanisha";

    function two(){
        const website = "youtube";
        console.log(username);
    }

    // console.log(website); // not defined

    two();

}

// two();  // not defined here 
// so to print tanisha need to do this
one()