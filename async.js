//Asynchronous Javascript ------------------------------------------------
console.log(1);
console.log(2);
setTimeout(() => {
  console.log(3);
}, 3000);
console.log(4);

//https://cors-anywhere.herokuapp.com/
//promises --------------------------------------------------------------
// function synchronous() {
//     let result=0
//     for(let i=0; i < 1000000000; i++){
//         result+=i
//     }
//     return result;
// }

// console.log('work')
// console.log(synchronous())
// console.log('more important work')

function asynchronous() {
  return new Promise((resolve, reject) => {
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i + undefined;
    }
    if (result) {
      resolve(result);
    } else {
      reject("I have got some error");
    }
  });
}

console.log("work");
asynchronous()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("more important work");

//fetch api ------------------------------------------------------------------------------------------------
//let userInput = prompt('Tell me user id: ')

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((response) => {
//     //console.log(response)
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//async await -----------------------------------------------------------------------------------------------
async function fetchTodos() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log(response);
    console.log("hi");
    let datas = await response.json();
    console.log(datas);
  } catch (err) {
    console.log(err);
  }
}
fetchTodos();

//Coding Styles Guides -------------------------------------------------------------------------------------------
//all cap (for constant name)
//snake case (ordinary variable name)
//camel case (for properties from object)
//capital case (for class name)
let array = ["Shine", "AgAg", "Kyaw Kyaw"];

// if (condition) console.log("statement"); //for one statement

function testStyle() {
  //need space between () and {
}

function greeting() {
  console.log("Hello Git");
}
