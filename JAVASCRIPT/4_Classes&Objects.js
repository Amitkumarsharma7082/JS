//! Classes & Objects
// const student = {
//   fullName: "Amit",
//   marks: 98,
//   printMarks: function () {
//     console.log("marks : ", this.marks);
//   },
// };

//! 1. Prototypes : objects
// const employee = {
//   calTax() {
//     console.log("tax");
//   },
// };

// const karanArjun = {
//   salary: 1000000,
//   yoe: 2,
// };

// //* calculate tax
// karanArjun.__proto__ = employee;

//! 2. Classes in JS
// class template
// class car {
//   start() {
//     console.log("car start");
//   }
//   stop() {
//     console.log("stop");
//   }
//  setBrand(brand) {
//this is indivalu object
//     this.brandName = brand;
//   }
// }
//create object
// let hyrider = new car();
// hyrider.setBrand("hyrider");
// let lexus = new car();
// lexus.setBrand("lexus");

//! 3. Constructor in JS
// // automatically invoked
// class car {
//   constructor(brand, mileage) {
//     console.log("creating new object");
//     this.brand = brand;
//     this.mileage = mileage;
//   }
//   start() {
//     console.log("car start");
//   }
//   stop() {
//     console.log("stop");
//   }
// }
// //create object
// let hyrider = new car("hyrider", 10);
// let lexus = new car("lexus");

//! 4. Inheritance in JS
// inheritance is passing down properties & methods from parent class to chil class
// class Parent {
//   hello() {
//     console.log("greet");
//   }
// }
// class Child extends Parent {}
// let obj = new Child();

// class Person {
//   constructor() {
//     console.log("enter parent constructor");
//     this.species = "homo sapiens";
//     console.log("exit parent constructor");
//   }
//   eat() {
//     console.log("eat");
//   }
//   sleep() {
//     console.log("sleep");
//   }
//   work() {
//     console.log("do nothing");
//   }
// }
// class Engineer extends Person {
//   constructor(branch) {
//     console.log("enter child constructor");
//     super(); // to invoke parent class constructor
//     this.branch = branch;
//     console.log("exit child constructor");
//   }
//   work() {
//     console.log("solve the probelm");
//   }
// }
// // super keywords
// let engObj = new Engineer("computer engineer");
// // method overriding

//! 5. try and catch
let a = 5;
let b = 10;
console.log("a : ", a);
console.log("b : ", b);
console.log("a + b : ", a + b);
console.log("a + b : ", a + b);
try {
  console.log("a + b : ", a + c); // error
} catch (err) {
  // handle are error
  console.log("something wrong", err);
}
console.log("a + b : ", a + b);
console.log("a + b : ", a + b);
console.log("a + b : ", a + b);
