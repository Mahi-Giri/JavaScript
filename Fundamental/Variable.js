let a = 5;
let b = "Mahesh";
const author = "Mahi";
const z = null;
{
  let c = "I am let variable";
  var d = "I am var variable";
}

console.log("Author is " + author);
// author = "Ramhesh"; // Can't be modified because of constant
// console.log("Author is " + author);
console.log(a);
console.log(b);
// console.log(c); // Throw an error coz let is the block scope variable
console.log(d);
console.log(z);