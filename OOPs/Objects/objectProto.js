// const car = {
//     getDetails(name) {
//         console.log(`Your car is ${name}`);
//     },
// };

// // Anothe way to create Object
// const car1 = Object.create(car);
// console.log(car1.__proto__);
// car1.getDetails("Lambo")


const parent = {
    name: "parent",
    children: [],
};

const child1 = Object.create(parent);
child1.name = "Mahesh";

child1.children.push(child1.name);

console.log(parent.children[0]);