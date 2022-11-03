// Primitives and Objects

// NNBBSSU
// N - NULL
// N - NUMBER
// B - Boolean
// B - BigInt
// S - String
// S - Symbol
// U - undefined

let a = null
let b = 543
let c = true // can also be false
let d = BigInt("697")
// let d = BigInt("697") + BigInt("3") // output is 700
let e = "rohit"
let f = Symbol("hi i am a nice symbol :) ")
let g = undefined
// let g // undefined

console.log(a, b ,c ,d ,e ,f ,g)

console.log(typeof d) // typeof keyword is use for identify data type

// non primitives data type - object in js

const items = {
    "rohit": true,
    "rohan": false,
    "ritesh": 67,
    "priyansh": undefined
}

console.log(items["rohit"])
console.log(items["rohan"])
console.log(items["ritesh"])
console.log(items["priyansh"])