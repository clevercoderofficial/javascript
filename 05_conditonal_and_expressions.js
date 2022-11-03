let a = prompt("hey whats your age?");
a = Number.parseInt(a); // converting string to the number
console.log(a);
console.log(typeof a); // number

if (a > 5) {
  alert("valid age");
} else {
  alert("this is invalid age ");
}

console.log("you can", (a<18? "not drive":"drive")) // you can drive
