// Problem 1
let arr = [1, 30, 4, 50, 230, 2, 4, 20];

let filtedArray = arr.filter((x) => {
    return x % 10 == 0;
});
console.log(filtedArray);

// Problem 2

let squaredArray = arr.map((x) => {
    return x * x;
});
console.log(squaredArray);