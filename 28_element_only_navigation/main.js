const changebgred = () => {
  document.body.firstElementChild.style.background = "red";
};

let b = document.body;
console.log("first child of b is ", b.firstChild);
console.log("first element child of b is ", b.firstElementChild);

console.log(b.previousElementSibling); // previous sibliing which is an element
console.log(b.nextElementSibling); // next sibling element
console.log(b.firstElementSibling); // first sibling element
console.log(b.lastElementSibling); // last sibling element

