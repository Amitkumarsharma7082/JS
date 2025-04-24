// const URL = "https://jsonplaceholder.typicode.com/posts";

// const getPosts = async () => {
//   console.log("getting data.....");
//   let response = await fetch(URL);
//   console.log(response.status);
// };
//! Understanding terms
//* Ajax is async JS & XML
//* JSON is javascript Object Notation
//* json() returns a second promise that resolves with result of parsing the response body text as JSON.

const URL = "https://jsonplaceholder.typicode.com/posts";

const getPosts = async () => {
  console.log("getting data.....");
  let response = await fetch(URL);
  console.log(response.status);
  let data = await response.json();
  console.log(data[0].title);
};
