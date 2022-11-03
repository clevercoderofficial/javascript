// question no 1
let age = prompt("Hey!, what is your age budddy :) ")
age = Number.parseInt(age);

if (age >= 10 && age <= 20) {
    console.log("your age iies between 10 & 20")
} else {
    console.log("your age doesnt lied between 10 & 20")
}


//question no 2
let Age = prompt("hey what is your age buddy")
Age = Number.parseInt(Age) //convert string to intiger

switch (Age) {
    case 12: // intiger
    // case '14': // string
        console.log("your age is 12")
        break
    case 14:
        console.log("your age is 14")
        break
    default:
        console.log("your age is not specal")
}

//question no 3
let num = prompt("enter a number")
num = Number/parseInt(num)

if( num%2==0 && num%3==0)
{
    console.log("your number is divisible by 2 and 3")
}
else{
    console.log("your number is not divisible by 2 and 3")
}

//question no 4
let num1 = prompt("enter a number")
num1 = Number/parseInt(num1)

if( num%2==0 || num%3==0)
{
    console.log("your number is divisible by 2 and 3")
}
else{
    console.log("your number is not divisible by 2 and 3")
}

// question no 5
let agE = 12
let c =agE>18? "you can drive":"you cannot drive"
console.log(c)