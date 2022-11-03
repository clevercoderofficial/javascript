let name = "Rohit"
console.log(name.length) // 5
console.log(name.toUpperCase()) // ROHIT
console.log(name.toLowerCase()) // rohit
console.log(name.slice(2,4)) // hi
console.log(name.slice(2)) // hit
console.log(name.replace("hi", "ro")) // replace hi --> ro

let friend = "ritesh"
console.log(name.concat(" is a friend of ", friend))
// Rohit is a friend of ritesh

let friend2 = "  bhola   "
console.log(friend2) // print with include space
console.log(friend2.trim()) // print bhola wihout space

let string = "   Hello World!"
console.log(string.trimStart())
console.log(string.trimEnd())

let fr = "Rohit"
console.log(fr[0]) //R
console.log(fr[1]) //o
console.log(fr[2]) //h
console.log(fr[3]) //i
// fr[3] = 'o' // this is not possible
console.log(fr[4]) //t



let fri = "ROHIT" + "RITESH"
console.log(fri) // ROHITRITESH

let str = "Apple, Banana , Mango"
console.log(str.substr(4)) // e, banana, mango
console.log(str.substr(-4)) // ango
console.log(str.substr(7,6)) // Banana

let num = "5"
console.log(num.padStart(4, 0)) // 0005


// quick quiz : use a for loop to print a string

for (let i = 0; i < fr.length; i++) {
    console.log(fr[i])
}