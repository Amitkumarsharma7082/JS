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
//* get, set (change and update)
//* a. tag name : return tag name firstElements.tag
//* b. innerText : return all its child node
// console.dir(document.body.firstChild[1]); // #text
// DOM tree : 1.text node, 2.comments node, 3.elements node

// let nodes = document.querySelector("div").children;
// console.dir(nodes); HTMLCollection(2) 0: div 1: p

// let div = document.querySelector("div");
// console.dir(div);
// div.innerText; div.textContent;

// let heading = document.querySelector("h1");
// console.dir(heading);

//? Let's Practice : Hello Javascript append "i love" ?
let change = document.querySelector("h2");
change.innerText = "I love " + change.innerText; // concat

let clss = document.querySelectorAll(".box");
clss[0].innerText = "hey Hey";
