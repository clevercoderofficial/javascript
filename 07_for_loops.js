// For Loop

// program to print n numbers
let n = prompt("enter the value of n")
n = Number.parseInt(n)

for(let i = 0; i<n; i++ )
{
    console.log(i+1)
}

// program to add first n natural numbers
let sum = 0
let n1 = prompt("enter the value of n1")
n1 = Number.parseInt(n1)
for(let i = 0; i<n1; i++)
{
    sum += (i+1)
}
console.log("sum of first" + n1 + "natural numbers is " + sum)

 
// For in loop

let obj = {
    rohit: 74,
    deepka: 74,
    ritesh: 86,
    priyansh: 56
}
// rohit is key a and values or 74 access by object name and key obj[a]
for(let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}

// marks of rohit are 74
// marks of deepka are 74
// marks of ritesh are 86
// marks of priyansh are 56

// For in loop
for(let b of "Rohit"){
    console.log(b)
}
// R
// o
// h
// i
// t