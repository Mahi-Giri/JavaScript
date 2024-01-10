// //complete the increaseSalaries function
// const employees = [
//     { id: 1, name: "Alice", department: "sales", salary: 40000 },
//     { id: 2, name: "Bob", department: "engineering", salary: 50000 },
//     { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
//     { id: 4, name: "David", department: "sales", salary: 35000 },
//     { id: 5, name: "Emily", department: "engineering", salary: 55000 }
// ];


// const increaseSalaries = employees.map((element) => {
//     if (element.department === "sales") {
//         element.salary = (element.salary + element.salary / 10).toFixed(2);
//         return element;
//     }
//     else if (element.department === "engineering") {
//         element.salary = (element.salary + element.salary / 15).toFixed(2);
//         return element;
//     }
//     else {
//         element.salary = (element.salary + element.salary / 5).toFixed(2);
//         return element;
//     }
// });

// console.log(increaseSalaries);



const employees = [
    { id: 1, name: "Alice", department: "sales", salary: 40000 },
    { id: 2, name: "Bob", department: "engineering", salary: 50000 },
    { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
    { id: 4, name: "David", department: "sales", salary: 35000 },
    { id: 5, name: "Emily", department: "engineering", salary: 55000 }
];

function increaseSalaries(employees) {
    const increasedSalaries = employees.map((employee) => {
        const { department, salary } = employee;

        let increasePercentage;
        switch (department) {
            case "sales":
                increasePercentage = 0.1;
                break;
            case "engineering":
                increasePercentage = 0.15;
                break;
            case "marketing":
                increasePercentage = 0.05;
                break;
            default:
                increasePercentage = 0; 
        }

        const newSalary = salary + salary * increasePercentage;

        return { ...employee, salary: newSalary };
    });

    return increasedSalaries;
}

const updatedEmployees = increaseSalaries(employees);
console.log(updatedEmployees);
