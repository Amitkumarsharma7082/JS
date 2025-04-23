//! Classes & Objects
// const student = {
//   fullName: "Amit",
//   marks: 98,
//   printMarks: function () {
//     console.log("marks : ", this.marks);
//   },
// };

//! 1. Prototypes : objects
const employee = {
  calTax() {
    console.log("tax");
  },
};

const karanArjun = {
  salary: 1000000,
  yoe: 2,
};

//* calculate tax
karanArjun.__proto__ = employee;
