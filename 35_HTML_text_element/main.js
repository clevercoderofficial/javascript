let a = document.getElementsByTagName('div')[0]
// a.innerHTML = a.innerHTML + '<p>hello world</p>'  

let div = document.createElement('div')
div.innerHTML = '<h1>hello sir</h1>'
// a.appendChild(div)  
// a.prepend(div)
// a.before(div)
a.replaceWith(div)