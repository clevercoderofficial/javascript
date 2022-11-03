let first = document.getElementById("first")
let a =first.getAttribute("classs")
console.log(a)
console.log(first.hasAttribute("class")) //true
console.log(first.hasAttribute("style")) //false
// first.setAttribute("hidden", "true") // set attributes
first.setAttribute("class", "true sachin") // set class
first.removeAttribute("class") // remove class

console.log(first.attributes)
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)