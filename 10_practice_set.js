// Question no 1
let marks = {
  rohit: 100,
  ritesh: 99,
  priyansh: 89,
  yogesh: 87,
};
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  );
}

// Question no 2
// using for in loop
for (let key in marks) {
  console.log("The marks of " + key + " are " + marks[key]);
}

// Question no 3
let cn = 3;
let i;
while (i != cn) {
  i = prompt("Enter a corret number");
  console.log("try again!");
}
alert("your you entered a correct number");
// console.log("you entered a correct number")

// Question no 4
const meanof = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};
console.log(meanof(54, 23, 42, 54));
