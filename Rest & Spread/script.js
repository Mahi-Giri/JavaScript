
// /* For Array */

// // // Rest
// // function addNumber(a, b, c, ...other) {
// //     console.log(other);
// //     return a + b + c + other[0];
// // }

// // const result = addNumber(1, 2, 3, 4, 5);
// // console.log(result);


// // Spread
// let names = ["Mahesh", "Ajay", "Vijay", "Ganesh"];

// // function getName(name1, name2, name3, ...other) {
// //     console.log(name1, name2, name3, other);
// // }

// function getName(...Name) {
//     console.log(Name);

//     for (const element of Name) {
//         console.log(element);
//     }
// }

// // At a time we can pass whole array using Spread
// getName(...names);


/* For Object */
// Rest

let student = {
    name: "Ajay",
    age: 24,
    hobbies: ["Cricket", "Singing"]
};

// // Normal way to access element in object
// console.log(student.age);

// // Array Destructuring
// const { age, ...rest } = student;
// console.log(age);
// console.log(rest);

// Spread
let newStudent = {
    // Accessing previous object and override value 
    ...student,
    name: "Vijay",
};
console.log(student);
console.log(newStudent);