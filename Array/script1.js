// Normal for loop
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// forof loop
// For accessing elements of array
for (const element of arr) {
    console.log(element);
}

// forin loop
// For accessing index of array
for (const key in arr) {
    console.log(key);
}