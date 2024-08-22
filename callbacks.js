// Define a function that takes another function as a callback
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();  // Call the callback function
}

// Define a callback function
function sayGoodbye() {
    console.log("Goodbye!");
}

// Call the 'greet' function and pass 'sayGoodbye' as the callback
greet("Alice", sayGoodbye);


//// another way pass function direct ////

// Define a function that takes a callback as an argument
function processUser(name, callback) {
    console.log("Processing user: " + name);
    callback();  // Call the callback function
}

// Use an arrow function as the callback
processUser("Alice", () => {
    console.log("User processed successfully!");
});

//// settime out ////

const hello = () =>{
    console.log("hello")
}

setTimeout(hello, 3000);