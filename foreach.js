// forEach loop

// The forEach loop is a method in JavaScript that allows you to iterate over an array and perform an operation on each element of the array. It takes a callback function as an argument and applies it to each element of the array.

let dishes = ["channy","karahi","bhallay", "kachori"]

// using in loop
for(let i = 0; i <dishes.length; i++){
    console.log(dishes[i])
}

console.log("\n****************\n")

// using for each loop
dishes.forEach(function(elements){ // callback function in for each we't need to inplement array length and condition and i and increment and decriment operator 
    console.log(elements)
})
