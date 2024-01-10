const input = [1, 3, 4, -2, -6, -4];

// both method working correct you can pass direct function also as a parameter

// const possive = input.filter(findNegative);
// function findNegative(num) {
//     return num > 0;
// }
const possive = [];
const negative = [];
const seprate = input.filter((num) => {
    if (num > 0) {
        possive.push(num);
    } 
    else if (num < 0) {
        negative.push(num);
    }
});

console.log(input);
console.log(possive);
console.log(negative);