// const obj = {
//     a: 1,
//     b: "ABC",
//     c: ['O', 'B', 'J'],
//     d: { value: 'Val' },
// }

// const { a: A1, b, c, d } = obj;
// console.log(A1);
// console.log(b);
// console.log(c);
// console.log(d);

// let b;
// ({ b:b }) = obj;
// b

// let obj = {
//     firstName: "John",
//     lastName: "Doe",
// }

// let { firstName: fn, lastName: ln } = obj;
// fn
// // firstName

// const { a, b } = { a: 1, b: 2 };
// const x = a + b;
// x

// let obj = {
//     name: "John",
//     country: "India",
//     age: 30,
// };

// let name;
// ({ name } = obj);
// let { country: c, age: a } = obj;
// obj.country = "Canada";
// name
// c
// a

let number = [5, 10, 15, 20];

let maxNumber1 = Math.max.apply(null, number);
let maxNumber2 = Math.max.call(null, ...number);
maxNumber1
maxNumber2