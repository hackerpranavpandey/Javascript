// how values from database comes
// its mostly object inside arrays
const users = new Array(
    {

    },
    {

    },
    {

    }
)
console.log(typeof users[0])

// check if any key is present in the object or not

const regularUser={
    email: "220010043@iitdh.ac.in",
    fullName: {
        first: "Pranav",
        Second: {s:"Kumar"},
        Last: "Pandey"
    }
}

// below will tell if any property is in object

console.log(regularUser.hasOwnProperty('email'))
