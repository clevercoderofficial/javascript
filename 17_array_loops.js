// for loop
let num = [2, 4, 4, 5];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}
// 2 4 4 5


// for each loop
num.forEach((element) => {
  console.log(element * element);
});
// 4 16 16 25

// array.from
let a = "rohit"
let arr = Array.from(a)
console.log(arr)

// for....of
for(let i of num)
{
    console.log(i)
}

// for....in
for(let i in num)
{
    console.log(num[i])
}