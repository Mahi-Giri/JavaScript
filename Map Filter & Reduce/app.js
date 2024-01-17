// Map
const arr1 = [1, 2, 3, 4, 5];
const mapFunction = arr1.map((element) => {
    return element * 2;
});

console.log(mapFunction);


// Filter
const arr2 = [5, 1, 3, 2, 6]
const filterFunction = arr2.filter((element) => {
    return element % 2 === 0;
});

console.log(filterFunction);


// Reduce
const arr3 = [5, 1, 3, 2, 6];

const output = arr3.reduce((max,curr)=>{
    if (curr > max) {
        max = curr;
    }
    return max;
},0);

console.log(output);