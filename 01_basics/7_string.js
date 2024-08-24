// single and double cotation both are allowed
let name="Tanisha"
let repoCount = 100
console.log(`Her name is ${name} with total repoCount of ${repoCount}`)
console.log(name)
console.log(name.__proto__)
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.indexOf('a'))
console.log(name.charAt(2))
console.log(name.substring(0,4))
console.log(name.slice(-7,4))
console.log(name.trim()) // removes white spaces

const url="https://hitesh.com/hitesh%20choudhary"

// not dynamic change

console.log(url.replace('%20','-'))

// will tell if any particular substring is present
console.log(url.includes('sundar'))

console.log(url.split('/'))

console.table(url)