const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// function square(input) {
//     const squared = [];
//     for (const num of input) {
//         squared.push(num * num);
//     }
//     return squared;
// }

// function cube(input) {
//     const cubic = [];
//     for (const num of input) {
//         cubic.push(num * num * num);
//     }
//     return cubic;
// }

// console.log(square(inputs));
// console.log(cube(inputs));

// opration functions is a Higher order function
function opration(input, fn) {
    const output = [];
    for (const num of input) {
        output.push(fn(num));
    }
    return output;
}

function square(number) {
    return number * number;
}

function cube(number) {
    return number * number * number;
}

console.log(opration(inputs, square));
console.log(opration(inputs, cube));