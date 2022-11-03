let num = [1, 3, 5, 6, 7, 3, 2];
let num_more = [124, 3, 2345, 6234, 247, 643, 2];
let num_even_more = [4, 6, 3, 4, 3, 67, 7, 3, 4];
delete num[0];
console.log(num);
// [ <1 empty item>, 3, 5, 6, 7, 3, 2 ]
// it doest not effect arrays length

let newarray = num.concat(num_more, num_even_more);
console.log(newarray);
console.log(num, num_more);

const compare = (a, b) => {
  return a - b;
};
num.sort();
num.sort(compare);
console.log(num);

num.reverse();
console.log(num);

num.splice(2, 3, 65343, 43432, 43323);
console.log(num);

let couting = [4, 2, 5, 42, 3, 4, 3];

// let new_num = couting.slice(3);
let new_num = couting.slice(3, 6);
console.log(new_num);
