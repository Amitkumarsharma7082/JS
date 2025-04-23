//! Window Object
// console.log("Hello");
// window.alert("Hello2");

//! DOM : Document Object Model
// window > document > html > head > body
// console.dir(document.body);
// console.log(document.body.childNodes[3]);

//! 1. DOM Manipulation : Selectors
//* a. Selecting with id : document.getElementById("myId");
// let heading = document.getElementById("myId");
// console.dir(heading); // style based on #heading
// wrong id return null

//* b. Selecting with class : document.getElementsByClassName("myClass");
// let headClass = document.getElementsByClassName("heading-class");
// console.log(headClass); // return html collections - similar Array
// wrong class return HTMLCollection []

//* c. Selecting with tag : document.getElementsByTagName("p")
// let tag = document.getElementsByTagName("p");
// console.dir(tag);

//* Query Selectors  : document.querySelector("p"
// let firstElements = document.querySelector("#myId"); // 1st element
// console.dir(firstElements); // p // only id(#)

// let allElements = document.querySelectorAll(".heading-class"); // All element
// console.dir(allElements); // return NodeList(3)

//! 2. DOM Manipulation : Properties
