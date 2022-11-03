// practice set question no 1

let age1 = prompt("Hey! enter your age");
age1 = Number.parseInt(age1);

const candrive1 = (age1) => {
  return age1 >= 18 ? true : false;
};
if (candrive1(age1)) {
  alert("You can drive");
} else {
  alert("You cannot drive");
}

// // practice set question no 2

let runagin = true;

const candrive = (age) => {
  return age >= 18 ? true : false;
};

while (runagin) {
  let age = prompt("Hey! enter your age");
  age = Number.parseInt(age);

  if (candrive(age)) {
    alert("You can drive");
  } else {
    alert("You cannot drive");
  }
  runagin = confirm("Do you want play again");
}

// practice set question no 3
let runagin1 = true;

const candrive2 = (age3) => {
  return age3 >= 18 ? true : false;
};

while (runagin1) {
  let age3 = prompt("Hey! enter your age");
  age3 = Number.parseInt(age3);

  if (age3 < 0) {
    console.error("Please enter a valid age");
    break;
  }

  if (candrive2(age3)) {
    alert("You can drive");
  } else {
    alert("You cannot drive");
  }
  runagin1 = confirm("Do you want play again");
}

// // practice set question no 4
let num = prompt("Enter a number");
num = Number.parseInt(num);

if (num > 4) {
  location.href = "https://google.com";
}

// practice set question no 5
let color = prompt("Hey! Enter the page background color");
document.body.style.background = color;
