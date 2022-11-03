let name = "rohit";
let lastname = "Bhure"; // '' valid syntex
// let my_fre = "Subh' // not valid syntex

console.log(name);
console.log(name.length); // print length of string
console.log(lastname);

// indexing starts form 0
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);

//template literals
let boy1 = "Rohit";
let boy2 = "Ritesh";
let sentence = `${boy1} is friend of ${boy2}`;
console.log(sentence);

// Escape sequence characters
// [\'] [\"] [\n] [\t] [\r]
let fruit = "Ban'ana";
let car = "BM\nW";
console.log(fruit); // Ban'ana
console.log(car); // new line print w
