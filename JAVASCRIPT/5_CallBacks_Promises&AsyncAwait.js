//sync programming
// console.log("one");
// console.log("two");
// console.log("three");

//! 1. Async in JS
// setTimeout(() => {
//   console.log("hello");
// }, 4000);

// console.log("three");
// console.log("four");

//! 2. callback
// function sum(a, b) {
//   console.log(a + b);
// }
// function cal(a, b, sumCallback) {
//   sumCallback(a, b);
// }
// cal(1, 2, (a, b) => {
//   console.log(a + b);
// });

//! 3. callback Hell

//nesting
// let age = 19;
// if (age >= 18) {
//   if (age >= 60) {
//     console.log("senior");
//   } else {
//     console.log("middle");
//   }
// } else {
//   console.log("child");
// }

// for (let i = 0; i < 5; i++) {
//   let str = "";
//   for (let j = 0; j < 5; j++) {
//     str = str + j;
//   }
//   console.log(i, str);
// }

// function getData(dataId, getNextData) {
// 2s
//   setTimeout(() => {
//     console.log("data : ", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }
// //! callback hell
// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// }); //2s -> run

//! 4. Promises : solve callback

// Promises : eventual completion of task.
// 3 state : pending, fulfilled(resolve), rejected;
// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   // resolve("success");
//   reject("some error occurred");
// });

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

//! 5. Promise.then((res)) & Promise.catch((rej))
// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am promise");
//     resolve("success");
//     // reject("network error");
//   });
// };

// let promise = getPromise();

// promise.then((res) => {
//   console.log("promise full", res);
// });

// promise.catch((err) => {
//   console.log("rejected", err);
// });

//! 6. Promise Chaining
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data 1");
//       resolve("success");
//     }, 4000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data 2");
//       resolve("success");
//     }, 4000);
//   });
// }
// console.log("fetching data1...");
// asyncFunc1().then((res) => {
//   console.log("fetching data2...");
//   asyncFunc2().then((res) => {});
// });

//! 7. Async-Await in JS
// async function hello() {
//   console.log("hello");
// }
// await : pause the execution to wait async function until the promise settled
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("wearther data");
      resolve(200);
    }, 2000);
  });
}
//! IIFE
(async function () {
  await api();
  await api();
  await api();
})();
