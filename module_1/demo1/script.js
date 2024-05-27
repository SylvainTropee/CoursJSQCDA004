let surf = "Surf"
let day = new Date()

let sports = [surf, "SkateBoard", "Break Dance"]

console.log(surf)
console.log(typeof surf)
console.table(sports)

for (const sport of sports) {
    console.log(sport)
}
//test égalité strict
let number = 42
let number2 = "42"
console.log(number == number2)
console.log(number === number2)

//function
const s = (function getSport(index){
    return sports[index]
})(1)

console.log(s)

// const getSport = function(index){
//     return sports[index]
// }
//
// const getSport = (index) => sports[index]
//
//
// console.log(getSport(2))












