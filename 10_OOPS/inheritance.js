const User = {
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fulltime : true,
    __proto__: TeachingSupport
}

// inheritance here
// now teacher can access all methods of Chai object
Teacher.__proto__ = User

console.log(Teacher.name)

// modern syntax
Object.setPrototypeOf(Teacher,TASupport)

console.log(Teacher.makeAssignment)

