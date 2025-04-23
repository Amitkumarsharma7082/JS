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
// const arrowSum = (a, b) => {
//   console.log(a + b);
// };
// arrowSum(5, 9);

// const arrowMultiple = (a, b) => {
//   console.log(a * b);
// };
// arrowMultiple(8, 9);

//? function return count vowels
// const countVowels = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

//! 3. For-Each Loop in Arrays
let array = ["Delhi", "Pune"];
// array.forEach(function printVal(val) {
// callBack
//   console.log(val);
// });

// array.forEach((val, i, arr) => {
//   console.log(val.toUpperCase(), i, arr); // 3 parameters pass
// });
// Theory Question higher order function forEach or methods dusre function parameter and return karte

//? Let's Practice arr = [1, 2, 3, 4, 5] square of each value using forEach() ?
// let arr = [2, 3, 4, 5, 67, 32, 39];
// let calculateSquare = (val) => {
//   console.log(val ** 2);
// };
// arr.forEach(calculateSquare);

//! 4. Some more Array Methods

//arr.map
// let arr = [2, 3, 4, 5];
// let newArr = arr.map((val) => {
//   return val * 2;
// });
// console.log(newArr);

// //arr.filter
// let evenArr = arr.filter((value) => {
//   return value % 2 == 0;
// });
// console.log(evenArr);

//arr.reduce : it reduce single value
// let sum = 0;
// let calSum = arr.reduce((res, cur) => {
//   return res + cur;
// });
// console.log(calSum);\

//? Let's Practice Question: 90+ score show in given array ?
// let arr = [90, 89, 99, 94, 78, 88];

// let newArr = arr.filter((val) => {
//   return val > 90;
// });
// console.log(newArr);

//? user given value like 5 : create array = [1, 2, 3, 4, 5] ?

let number = prompt("Enter a number : ");
let arr = [];

for (let i = 1; i <= number; i++) {
  arr[i - 1] = i;
}
let factorial = arr.reduce((res, curr) => {
  return res * curr;
});
let sum = arr.reduce((res, curr) => {
  return res + curr;
});
console.log("factorial : ", factorial);
console.log("sum : ", sum);
