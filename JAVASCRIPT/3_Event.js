//! 1. Event handling
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//   console.log("button was clicked");
// };

// let btn2 = document.querySelector("#btn2");
// btn2.ondbClick = () => {
//   console.log("2x");
// };

//! 2. Event Object
// let btn = document.querySelector("#btn1");
// btn.onclick = (e) => {
//   console.log(e.type);
//   console.log(e.clientX, e.clientY); // for game purpose
// };

// let div = document.querySelector("div");
// div.onmouseover = (e) => {
//   console.log(e.type);
// };

//! 3. Event Listeners
// let btn = document.querySelector("#btn1");
// btn.addEventListener("click", () => {
//   console.log("button was clicked - handler1");
// });
// btn.addEventListener("click", () => {
//   console.log("button was clicked - handler2");
// });
// const handler3 = () => {
//   console.log("button was clicked - handler3Const");
// };
// btn.addEventListener("click", handler3);

// btn.addEventListener("click", () => {
//   console.log("button was clicked - handler4");
// });
// btn.removeEventListener("click", handler3);

//? Let's Practice
let btn = document.querySelector("#btn");
let curMode = "light"; // dark
btn.addEventListener("click", () => {
  if (curMode === "light") {
    curMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    curMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(curMode);
});
