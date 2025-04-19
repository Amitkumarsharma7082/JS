//! 1. JS
// console.log("Welcome JS");
// console.log("Hello Amit");
// console.log("I love JS");
// alert('Hello');

//! 2. Variables
// fullName = "Tony Stark";
// console.log(fullName);

// age = 24;
// console.log(age);

// price = 99.99;
// console.log(price);

// x = null; //
// console.log(x);

// y = undefined;
// console.log(y);

// isFollow = true;
// console.log(isFollow);

//? Q : diff b/w null & undefined;
//* know the value but call null and dont know the value is undefined

//! 3. let, const & var
// var : //* Global Scope

// let age = 24; //* Block Scope {}
// age = 59;
// console.log(age);

// const fullName = "Amit"; //* Block Scope {}
// fullName = "abc"; //* TypeError
// console.log(fullName);

// let a;
// console.log(a); //* undefined

// const a; //* always give a value

// {
//   let a = 5; //* Block Scope
//   //console.log(a);
// }
// console.log(a); //* ReferenceError Defined outside of BlockScope

//! 4. Data Types in JS

// let age = 24;
// console.log(age); //* typeOf
//* null : object

// let x = BigInt("123");
// let y = Symbol("Hello");
// console.log(x);
// console.log(y);

//Arrays, Function
// objects : collection of values students is object
// value store key : value
// {
//   age: 24;
//   name: "abc";
// }

//* Objects
// const student = {
//   fullName: "abc",
//   age: 20,
//   cgpa: 8.2,
//   isPass: true,
// };
// // let a = 25;
// // a = 10;

// student.age = student.age + 1;
// student.fullName = "abc + d";
// // access the key obj.
// console.log(student.fullName);
// const in case of Objects is key is update
//? Q : Create a object called 'Product' ?

const product = {
  productName: "pen",
  price: 270,
  color: "Black",
  rating: 4,
  deal: "5%",
};

console.log(product);
// string : 'abc' + 123 = 'abc123'

//? Q : Create a 'profile' ?

const profile = {
  userName: "Amit",
  totalPosts: 195,
  followers: "569k",
  following: 4,
  bio: "Entrepreneur Soft Engg.",
};

console.log(profile);
