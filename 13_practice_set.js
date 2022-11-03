// Chapter 4 practice question 1

let str = "Rohit\"" // /" is a escape sequence character
console.log(str.length) // 6

// Chapter 4 practice question 2

const sentence = 'The Quick brown fox jumps over the lazy dog.'
const word = 'fox'
console.log(sentence.includes(word)) // true
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`)
// expected output: "The word "fox" is in the sentence"



const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));
// expected output: true

console.log(str1.startsWith('Sat', 3));
// expected output: false

console.log(str1.startsWith('plans', 15));
// expected output: true



const str2 = 'Cats are the best!';
console.log(str2.endsWith('best!'));
// expected output: true

console.log(str2.endsWith('best', 17));
// expected output: true

const str3 = 'Is this a question?';

console.log(str3.endsWith('question'));
// expected output: false

console.log(str3.endsWith('question?'));
// expected output: true

// Chapter 4 practice question 3

let myname = "RAHUL"
console.log(myname.toLowerCase())

// Chapter 4 practice question 4

let str4 = "please give rs 1000"
let amout = Number.parseInt(str4.slice(15)) // typeof is number

// let amout = str4.slice(15) // typeof is string not number
console.log(typeof amout)
// let amout = str4.slice("please give rs ".length)
console.log(amout)
// expected output: 1000


// Chapter 4 practice question 5

let friend1 = "Subham"
friend1[3] = 'R'
console.log(friend1) // friend1 is note changed, because string is ummutable
