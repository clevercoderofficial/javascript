console.log(document.getElementsByTagName("span")[0])
console.dir(document.getElementsByTagName("span")[0]) // print as an object

console.log(document.body.firstChild.nodeName) // '#text'
console.log(document.body.firstElementChild.nodeName) // 'SPAN'

let x = document.getElementsByTagName("span")[0]
console.log(x)

let y = document.getElementsByTagName("span")[0]
console.dir(y)

first.innerHTML = "<span>hey i am span for main.js</span>" // update innerhtml from javascript
console.log(first.innerHTML) // print innerhtml content
console.log(first.outerHTML) // print outerhtml content

console.log(document.body.firstChild) // "hello world"
console.log(document.body.firstChild.data) // hello world
console.log(document.body.firstChild.nodeValue) // hello world

console.log(document.body.textContent)

first.hidden = false // element hide and unhide