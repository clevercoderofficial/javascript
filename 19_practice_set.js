// Chaper 5 practice set question no 1
// Chaper 5 practice set question no 1

let arr = [4, 56, 76, 3, 3, 2];
let a = prompt("Enter a number ");
a = Number.parseInt(a);

arr.push(a);
console.log(arr);

// Chaper 5 practice set question no 2
let arr2 = [4, 56, 76, 3, 3, 2];
let b;
do {
  b = prompt("Enter a number ");
  b = Number.parseInt(b);

  arr2.push(b);
} while (b != 0);
console.log(arr2);

// Chaper 5 practice set question no 3
let arr3 = [4, 56, 76, 3, 50, 670, 10, 3, 2];
let n = arr3.filter((x) => {
  return x % 10 == 0;
});
console.log(n);

// Chaper 5 practice set question no 3
let arr4 = [4, 56, 76, 3, 50, 670, 10, 3, 2];
let p = arr4.map((x) => {
  return x * x;
});
console.log(p);

// Chaper 5 practice set question no 4
let arr5 = [1, 2, 3, 4];
let f = arr5.reduce((x1,x2)=>{
    return x1 * x2
})
console.log(f)
