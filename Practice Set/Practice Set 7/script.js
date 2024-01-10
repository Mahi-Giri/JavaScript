// Problem 1
// Change color using js

// document.body.children[0].style.color = "red";
// document.getElementsByTagName("nav")[0].style.color = "blue";

// Problem 2
// Change color of 1st and last element

// document.body.children[0].children[0].style.color = "deeppink";
// document.body.children[0].children[3].style.color = "deeppink";
// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "deeppink"
// document.getElementsByTagName("nav")[0].lastElementChild.style.color = "deeppink"

// Problem 3
// Change the background color of all li tag
// let a = document.body.children[0].children;
// for (let i = 0; i < a.length; i++) {
//     let element = a[i];
//     element.style.background = "cyan";
// }
Array.from(document.body.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "red ";
});
