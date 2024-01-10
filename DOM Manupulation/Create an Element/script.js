// const heading = document.querySelector(".heading");
// const paragraph = document.querySelector(".para");
// const innerHeading = document.querySelector(".inner-heading");  

// console.log(heading);
// console.log(paragraph);
// console.log(innerHeading);

const btn = document.createElement("button");
const div = document.querySelector("div");

btn.innerText = "Click me!";
btn.classList.add("btn");
div.insertAdjacentHTML(btn);