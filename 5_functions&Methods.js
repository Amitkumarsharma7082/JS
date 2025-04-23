//! Functions

//! 1. Functions in JS

//* **********Define Function********** :
// Function Definition
// function functionName() {
// do some work
// }
// function functionName(param1, param2) {
// do some work
// }
// Function call
// functionName();

// function myFunction() {
//   console.log("Amit Kumar Sharma");
//   console.log("we are learning JS");
// }
// myFunction();

//* *********Function with Parameter*********
// function myFunction(msg) {
// -> input parameter
//   console.log(msg);
// }
// myFunction("I love JS");
//! Functions params in block scope
// Write a function add two numbers
// function sum(a, b) {
//   s = a + b;
//   return s;
// }
// let val = sum(3, 4);
// console.log(val);

//! 2. Arrow Function in JS
const arrowSum = (a, b) => {
  console.log(a + b);
};
arrowSum(5, 9);

const arrowMultiple = (a, b) => {
  console.log(a * b);
};
arrowMultiple(8, 9);
