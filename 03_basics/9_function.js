// IIFE
// using ()() one for declaration and other for passing parameters
// more than one IIFE in a single file
// named IIFE and siimple

(function chai () {
    console.log(`DB connected `)
})();

( (user) => {
    console.log(`${user} connected to DB`)
})("Tanisha")