const class6 = {
    secA: {
        student1: {
            name: "Alex",
            age: 12,
        },
        student2: {
            name: "Bob",
            age: 14,
        },
    },
    SecB: {
        student1: {
            name: "Tina",
            age: 12,
        },
        student2: {
            name: "Sita",
            age: 14,
        }
    }
}

console.log(class6.SecB.student2.age);
// console.log(class6[1].SecB.student2.age);
// console.log(class6[SecB][student2][age]);
console.log(class6["SecB"]["student2"]["age"]);