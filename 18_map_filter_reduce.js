// Array Map method
let arr = [44, 23, 43];

let a = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value + index;
});
// 44 0 [ 44, 23, 43 ]
// 23 1 [ 44, 23, 43 ]
// 43 2 [ 44, 23, 43 ]

console.log(a); // [ 44, 24, 45 ]

// Array Filter method
let arr2 = [45, 28, 97, 4, 5, 2, 9];
let b = arr2.filter((value) => {
  return value < 10;
});
console.log(b, arr2); // 4 ,5 ,2 ,9
// [45, 28, 97, 4, 5, 2, 9]

// Array reduce method
let arr3 = [3, 45, 2, 3, 5];
let newarray = arr3.reduce((x, y) => {
  return x + y;
});
console.log(newarray)
