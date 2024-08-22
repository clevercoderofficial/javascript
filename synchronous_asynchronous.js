// Synchronous programming 
console.log("one")
console.log("two")
console.log("tree")
console.log("four")

// Asynchronous programming
console.log("one")
console.log("two")
setTimeout(() => {
    console.log("settime out after 3 secound")
}, 3000);
console.log("three")
console.log("four")  