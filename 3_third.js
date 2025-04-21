//! Loops and Strings

//! 1. Loops in JS
// for (let i = 0; i <= 5; i++) {
//   console.log("Amit");
// }
// in scope of Golbal Scope var i; it contains retrun 5 times 6

//? Sum 1 to 5 : 1+2+3+4+5 = 15;
// let sum = 0;
// let n = prompt("Enter the value");
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log(sum);
// console.log("Loop has ended");

//! 2. While Loop in JS
// while (condition) {
// Do some work
// }

// let i = 1;
// let n = prompt("Enter the value");
// while (i <= n) {
//   console.log("i : ", i);
//   i++;
// }

//! 3. for of Loop in JS
//* 'Tony' : every char loop *not use object
//for-of-loop
// let str = "TonyStark";
// let size = 0;
// for (let i of str) {
//   //iteator -> characters
//   // do some work
//   console.log("i = ", i);
//   size++;
// }
// console.log("string size : ", size);

//! 4. for-in-loop in JS
// const student = {
//   fullName: "Amit",
//   age: 20,
//   cgpa: 7.5,
//   isPass: true,
// };
// for (let key in student) {
//   console.log("key is :", key, "value : ", student[key]);
// }

//! Questions
//? Let's Practice Q1 : Print all even number 1 to 100
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log("num = ", i);
//   }
// }
//? Let's Practice Q2 : Game number = 25, Ask the user to keep guessing the game
// let gameNumber = 25;

// let userNum = prompt("Guess the game number");

// while (userNum != gameNumber) {
//   //game
//   userNum = prompt("you entered wrong number. Guess again");
// }
// console.log("Congratulations, you enter the right number");

//? ||----------------Strings----------------------------||

//! Strings in JS

//! 1. Strings

// let str1 = "Stark EXPO";
// let str2 = "Tony Strak";
//* In-built properties and function
//* Methods : String Length (str1.length) / str2[0] (access char)

// console.log(str1.length);

//! 2. Temaplate literals in JS
// const obj = {
//   item: "pen",
//   price: 10,
// };
// String Interpolation : ${expression} : ${1 + 2 + 3}
// let specialString = `This is template literal ${obj.item} and ${obj.price}`;
// console.log(specialString);
//* Escape Characters
// let str = "ab\tcd"; // single \t
// console.log("String\nExpression"); // next line
// console.log("String\tExpression"); // tab space
// console.log(str.length); //* 5

//! 3. String Methods in JS
// let str = "         ABC ef      ";
//* These method not change original value : is Immutable (ChangeX)
// console.log(str.toUpperCase()); //ABC
// console.log(str);
// console.log(str.toLowerCase()); // abc
// console.log(str.trim()); //* removes whitespaces
//* More Methods
// str.slice(start, end?); //* Return Part of string
// str.concat(str2); //* Joins str2 with str1
// str.replace(searchVal, newVal);
// str.charAt(idx)
// let str = "0000";
// let stri = "789";
// console.log(str + stri);
// console.log(str.replaceAll("0", "-1"));

// let str = "ILOVEJS";
// str = str.replace("I", "A");
// console.log(str);

//? Prompt user enter fullName
//? eg : amitKumar userName : @amitKumar(str.length)

let str = prompt("Enter the full name without spaces");
str = `@${str}${str.length}`;
console.log(str);
