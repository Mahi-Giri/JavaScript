const user1 = {
    username: "Sara",
    Age: 28,
    marks: {
        Maths: 20,
        English: 30
    }
};

// // shallow copy // //
// Using spread operator

// const user2 = { ...user1 };
// user2.username = "Mahi";
// user2.Age = 30;
// console.log(user1, user2);

// Using Object.assign
// const user2 = Object.assign({}, user1);
// user2.username = "Mahi";
// user2.Age = 33;
// console.log(user1, user2);

// If nested object is present, then shallow copy will not work
// user2.marks.Maths = 30;
// console.log(user1, user2);


// // Deep copy // //
const user2 = JSON.parse(JSON.stringify(user1));
console.log(user1, user2);

user2.marks.Maths = 30;

console.log(user1, user2);
