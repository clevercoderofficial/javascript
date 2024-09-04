// object
let car = {
    color: "black",
    number: 2323,
    name: "bugati"
}

console.log(car)

// Accessing the javascript object properties
console.log(car["color"])
console.log(car.color)

// "Modify The Object"
car.color = "white"
car["color"] = "white"
console.log(car.color)

// Delete properties of object
let obj = {
    prop1: "value1",
    prop2: "value2"
}

console.log(obj)
delete obj.prop1;
console.log(obj.prop1)

// by using bracket notation
delete obj["prop1"]
console.log(obj["prop1"])



// array of an object
// let car1 = [
//     {color:"black", no: 34}, 
//     {color: "blue", no: 24}
// ]
// console.log(car1)