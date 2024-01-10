const arr = [1, 2, 3, 4, 5];
// const cities = ["Pune", "Mumbai", "Nashic"];

// cities.forEach((value, index, array) => {
//     console.log(value, index, array);
// });

// // forEach modified in same array 
// arr.forEach((element) => {
//     console.log(element * element);
// });

// // Map return new array 
// let newArray = arr.map((element) => {
//     return element + 1;
// });

// console.log(newArray);

// // filter Function
// // This method will return true value of statement
// let evenArray = arr.filter((element) => {
//     return element % 2 === 1;
// });

// console.log(evenArray);

// reduce Method
const output = arr.reduce((result, current) => {
    if (result > current) {
        return result;
    }
    return current;
})

console.log(output);