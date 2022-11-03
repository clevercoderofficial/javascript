let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)
// elem.matches is used for check if element matches the given css selector
console.log(id1.matches(".class")) // false
console.log(id1.matches(".box")) // true

console.log(sp1.closest(".box")) 
console.log(sp1.closest("#sp1"))
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))