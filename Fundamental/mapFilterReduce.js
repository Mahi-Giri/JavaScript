let arr = [6, 32, 7, 1, 523, 263, 25];
arr.map((value, index, array) => {
    // accepting value index and array
    // console.log(value, index, array);
});

let arr1 = [24, 1, 36, 0, 24, 2, 42, 5, 8, 52];

let filtedArray = arr1.filter((value) => {
    return value < 10;
});

console.log(filtedArray);
