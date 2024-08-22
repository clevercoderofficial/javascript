alert("hello")
// setTimeout(() => {
//     alert("i am inside of set time interval")
// }, 2000);

setTimeout(function () {
    alert("using function i am inside of set time interval")
}, 4000);

let a = setTimeout(() => {
    alert("i am inside of set time interval")
}, 2000);

console.log(a) // print timer id

let b = prompt("hey you want to run settimeout (y/n)?")
if ("n" == b) {
    clearTimeout(a) // execution of timeout is stop
}

const sum = (a, b) => {
    console.log("yes i am running", + (a + b))
}

setTimeout(sum, 1000, 3, 5)

// run code at perticular set of intervals
// setInterval(() => {
//     console.log("set interval :)")
// }, 3000);

// cleartimeout is used for cancle the execution in cause we change our mind
let timerid = setTimeout(() => {
    console.log("hello")
}, 3000);

clearTimeout(timerid)

// clearInterval is used for cancle the execution in cause we change our mind
let timerid1 = setInterval(() => {
    console.log("hello")
}, 3000);

clearInterval(timerid1)