//! 1. DOM Manipulation : Attribute
// let div = document.querySelector("div");
// console.dir(div);

// let id = div.getAttribute("id");
// console.log(id); // id name print

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));

//* Attribute for Style
// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.fontSize = "26px";

//! 2. Insert elements
//* Step 1 : create a element
// let btn = document.createElement("button");
// let p = document.createElement("p");
// btn.innerText = "Click here";
// p.innerText = "this is my new Paragragh";
//* Step 2 : access div (follow node tree)
// let div = document.querySelector("div");
// let para = document.querySelector("p");
//* Step 3 :append btn in div
// div.append(btn); // at end
// para.append(p);
// div.prepend(btn); // at start
// div.before(btn);
// div.after(btn);

//* remove
// para.remove();
// const fragment = document.createDocumentFragment();

// const li = fragment
//   .appendChild(document.createElement("section"))
//   .appendChild(document.createElement("ul"))
//   .appendChild(document.createElement("li"));
// li.textContent = "hello world";
// li.textContent = "hello ji";

// document.body.appendChild(fragment);

//? Let's Practice
let newBtn = document.createElement("button");
newBtn.innerText = "click mee";
let body = document.querySelector("body");
body.prepend(newBtn);
body.style.backgroundColor = "red";
newBtn.style.color = "purple";

//* classlist
// const div = document.createElement("div");
// div.className = "foo";

// // our starting state: <div class="foo"></div>
// console.log(div.outerHTML);

// // use the classList API to remove and add classes
// div.classList.remove("foo");
// div.classList.add("another-class");
