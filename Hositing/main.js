// hosting 
// variable "declaration" are "hoisted" toward "top" of their scope

// using var hosting is not possible by let and cost
test = 6;
console.log(test)
var test;

// trought error
// test1 = 4;
// console.log(test1)
// let test1;

// function declaration
fun1()
function fun1(){
    console.log("hello")
}

// Not function expression or arrow function

// trought error
// fun2()
// let fun2 = function(){
//     console.log("hello")
// }

// fun3()
// let fun3 = () =>{
//     console.log("hello")
// }