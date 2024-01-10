// console.log("First child: ", document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

let firstElement = document.body.children[0];
let secondElement = document.body.children[1];
let thirdElement = document.body.children[2];

console.log(firstElement);
console.log(secondElement);
console.log(thirdElement);


// const changebg = () => {
//     document.body.firstElementChild.style.background = "red";
// }
const changebg = () => {
    document.body.children[0].style.background = "red";
    document.body.children[1].style.background = "aqua";
    document.body.children[2].style.background = "aquamarine";
}