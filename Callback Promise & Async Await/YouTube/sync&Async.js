// // Synchronous Programming
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// Asynchronous Programming

console.log(1);
console.log(2);

setTimeout(() => {
    console.log("I am in set timeout");
}, 4000);

console.log(3);
console.log(4);