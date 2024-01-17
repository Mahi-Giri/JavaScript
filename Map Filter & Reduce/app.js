// // Map
// const arr1 = [1, 2, 3, 4, 5];
// const mapFunction = arr1.map((element) => {
//     return element * 2;
// });

// console.log(mapFunction);


// // Filter
// const arr2 = [5, 1, 3, 2, 6]
// const filterFunction = arr2.filter((element) => {
//     return element % 2 === 0;
// });

// console.log(filterFunction);


// // Reduce => If you want return only one value from the array then you can use reduce function
// const arr3 = [5, 1, 3, 2, 6];

// const output = arr3.reduce((max,curr)=>{
//     if (curr > max) {
//         max = curr;
//     }
//     return max;
// },0);

// console.log(output);


const user = [
    {
        Name: 'John',
        Age: 30,
        City: 'New York'
    },
    {
        Name: 'Mary',
        Age: 25,
        City: 'California'
    },
    {
        Name: 'Mary',
        Age: 20,
        City: 'Los Angeles'
    },
    {
        Name: 'Tony',
        Age: 18,
        City: 'Los Angeles'
    }
];

// const output = user.reduce((acc, curr) => {
//     if (acc[curr.Age]) {
//         acc[curr.Age]++;
//     } else {
//         acc[curr.Age] = 1;
//     }
//     return acc;
// }, {});

// console.log(output);

const output = user.filter((element) => {
    if (element.Age > 25) {
        return element.Name;
    }
});

console.log(output);