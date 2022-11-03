// arrays method

let num = [1, 2, 4, 66, 73];
let b = num.toString(); // b is now string
console.log(b, typeof b);

let c = num.join("_");
console.log(c, typeof c);

// num.pop()
// console.log(num)
let r = num.pop(); // pop returned the pop element
console.log(num, r);

let g = num.push(56); // push return the new array length
console.log(num, g);

let h = num.shift();
console.log(h, num);

let j = num.unshift(65);
console.log(j, num);
