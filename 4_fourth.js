//! Arrays :

//! 1. Arrays in JS
//* Collections of items

// Create Array :
let heroes = ["IronMan", "Hulk", "Thor", "CaptainAmerica"];
// let marks = [97, 92, 82, 75];
// typeof marks 'object'
// console.log(heroes);
// for (let i = 0; i < heroes.length; i++) {
//   console.log(heroes[i]);
// }

//! 2. Array Indices in JS
// let arr = "TONY"; // arr[0], arr[1]; Array is mutable
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// for (let i of heroes) {
//   console.log(i);
// }
// let cities = ["Delhi", "Gurugram", "pune"];
// for (let city of cities) {
//   console.log(city.toUpperCase());
// }

//? Lets Practice Q1: Given Array marks -> [85,44,97,37,60] find average ?
// let studentMarks = [85, 44, 97, 37, 60];
// let sum = 0;
// for (let val of studentMarks) {
//   sum += val;
// }
// let averageMarks = sum / studentMarks.length;
// console.log(`Average marks of the class = ${averageMarks}`);

//? Lets Practice Q2:  Array of items and 10% off
let items = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of items) {
//   console.log(`Value at index ${i} = ${val}`);
//   let offer = val / 10;
//   items[i] = items[i] - offer;
//   console.log(`Value after offer = ${items[i]}`);
//   i++;
// }
// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
//   let offer = items[i] / 10;
//   items[i] = items[i] - offer;
//   console.log(`Value after offer = ${items[i]}`);
// }
// console.log(items);

//! 3. Arrays Methods in JS
// push(); // add at last
// pop(); // delete from end & return
// toString(); // convert array into string
let foodItems = ["carrot", "apple", "lichi", "tomato"];
console.log(foodItems);
foodItems.pop(); // single item delete
console.log(foodItems);
