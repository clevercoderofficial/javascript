// function

// function returning another function

let compliment = function(msg){
    return function(name){
        console.log(`${msg} ${name}`)
    }
}

// 1st method 
// compliment('you are good coder')('rohit')

// 2nd method 
let compliemented = compliment('you are good coder')
compliemented('rohit')

// compliment is higher order function