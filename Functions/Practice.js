// const marks = [97, 64, 32, 49, 99, 96, 86];

// let topper = marks.filter((element) => {
//     return element > 90;
// })

// console.log(topper);

let number = 5;
let arr = [];
for (let i = 1; i <= number; i++) {
    arr[i - 1] = i;
}

console.log(arr);

let sumArray = arr.reduce((result, current) => {
    return result + current;
});

console.log(sumArray);

let factorial = arr.reduce((result, current) => {
    return result * current;
});

console.log(factorial);