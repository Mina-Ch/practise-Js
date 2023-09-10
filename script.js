"use strict";

let firstname = "mina";
let lastname = "cheraghali";
let age = "26";

console.log(
  `my name is ${firstname}, my lastname is ${lastname}, im ${age} years old`
);

//-------------------------------------//

let surname = "cheraghali";
let completeName = `my name is mina ${surname}`;
console.log(completeName);

//-------------------------------------//

const sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(5, 8));

//-------------------------------------//

const sub = (num1, num2) => {
  return num1 - num2;
};
console.log(sub(15, 6));

//-------------------------------------//

const multi = (num1, num2) => {
  return num1 * num2;
};
console.log(multi(8, 4));

//-------------------------------------//
const div = (num1 = 18, num2 = 2) => {
  return num1 / num2;
};
console.log(div());

const div1 = (num1 = 18, num2 = 2) => {
  return num1 / num2;
};
console.log(div1());
