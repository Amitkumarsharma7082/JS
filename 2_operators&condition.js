//! Operators and Conditionals in JS

//! 1. Comments in JS
// one line comment
/* Multiple line Comments */
console.log("Hello");

//! 2 Operators in JS
// let a = 5;
// let b = 2;
// console.log(a + b);

// //* Modulus a%b (rem)
// console.log(a % b);

// //* Exponentiation (power) (**)
// console.log(a ** b);

// //* Increment
// console.log(a++);
// console.log(a);

// //* Decrement
// console.log(a--);

//! 3. Assignments Operators
//? =, +=, -=, *=, %=, **=

// let a = 5;
// let b = 2; // (right to left assign)

// a += 4; // a = a + 4;
// console.log(a);

// a -= 4; // a = a - 4;
// console.log(a);

//! 4. Comparison Operators
//? Equal to ( == ), Equal to & type ( === ),
//? Not Equal to ( != ), Not Equal to & type ( !== )
//? >, <, <=, >=

// let a = 5;
// let b = 5;

// console.log(a == b);
// console.log(a != b);
// console.log(a === b);

//! 5. Logical Operators
//? &&, ||, !
// let a = 6;
// let b = 5;

// let cond1 = a < b; // false
// let cond2 = a === 6; // true

// console.log("cond1 && cond2 = ", cond1 && cond2); // true
// console.log("cond1 || cond2 = ", cond1 || cond2); // true
// let c = false;
// console.log("!c = ", !c);

//! 6. Conditional Statement
// let mode = "light";

// let color;
// if (mode === "dark") {
//   color = "black";
// }
// if (mode === "light") {
//   color = "white";
// }

// if (mode === "dark") {
//   color = "black";
// } else {
//   color = "white";
// }

// console.log("color : ", color);

//! 7. Ternary Operators in JS
//? condition ? true output : false output;
//* age >= 18 ? "adult" : "not adult";

// let age = 15;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

//! 8. Practice Question
//? prompt using for input
// let fullName = prompt("Hello");
// console.log(fullName);

// let num = prompt("Enter a number");
// if (num % 5 === 0) {
//   console.log("Yes this number is divided by 5");
// } else {
//   console.log("No this number is not divided by 5");
// }
