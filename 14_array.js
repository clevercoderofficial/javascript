let marks_class12 = [53, 43, 35, 52, null, "not present"]

console.log(marks_class12[0]) // 53
console.log(marks_class12[1]) // 43
console.log(marks_class12[2]) // 35
console.log(marks_class12[3]) // 52

console.log(marks_class12[6]) // will be undefined because index 6 not exist

// print length of array
console.log("the length of marks class 12 is ", marks_class12.length) // the length of marks class 12 is 6

marks_class12[6] = 89
console.log(marks_class12[6]) // added a new value to the array

marks_class12[0] = 91 // change the value of an array

console.log(marks_class12)
console.log(typeof marks_class12) // array is a object

// quick quize print all value with for loop
for(let i = 0; i <= marks_class12.length; i++)
{
    console.log(marks_class12[i])
}