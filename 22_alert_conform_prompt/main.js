alert("Hey! Enter the value of a");
// let a = prompt("Enter here ")
let a = prompt("Enter here ", "532"); // set default value 532 in box
a = Number.parseInt(a); // convert string to number
document.write(a); // used for print on screen
alert("You enterd a of type " + typeof a); // used for identify typeof variable
let write = confirm("Do you want to write it to the page");
if (write) {
  document.write(a);
} else {
  document.write("please allow me to write");
}
