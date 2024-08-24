// const marvel_hero = new Array("batman","superman","spider")

// const dc_heros = ["thor","flash"]

// // marvel_hero.push(dc_heros)

// // console.log(marvel_hero)

// // console.log(marvel_hero[3][1])

// // console.log(typeof marvel_hero[0])

// const t = marvel_hero.concat(dc_heros)

// console.log(t)

// // instead use spread operator

// const all_new_heros = [...marvel_hero, ...dc_heros]

// console.log(all_new_heros)

// const another_array = [1, 2, 3, 4,[ [5, 6, 7],[ 8, [9, 10, 11], 12]]]

// // now for arrays like above multi dimension

// const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array)

// console.log(typeof real_another_array)

console.log(Array.isArray("Tanisha"))
console.log(Array.from("Tanish"))

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3))
