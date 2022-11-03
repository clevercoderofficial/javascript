console.log("hello world");
let a = 65;
console.log(a); // output is 65
a = "Rohit"; // let can possible to update but'n re-declare
console.log(a); // output is Rohit

var b = 63;
console.log(b); // output is 63
var b = "code"; // var can possible to update and re-declare
console.log(b); // output is code

var c = 55;
{
  var c = 77;
  console.log(c);
}
console.log(c);
// out put is 77 / 77

let d = 66;
{
  let d = 88;
  console.log(d);
}
console.log(d);
// output is 88 / 66

const author = "rohit"; // const can nether be update & re-declare
// let author = "coder boy" // throws an error because const cannot be changed
// author = "coder boy" // throws an error because const cannot be changed
console.log(author);




