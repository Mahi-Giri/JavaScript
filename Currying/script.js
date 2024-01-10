function power(b) {
    return function (a) {
        return a ** b;
    }
}

const square = power(2);

console.log(square(2));
console.log(square(3));
console.log(square(4));