let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("Length of array is " + arr.length);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (const iterator of arr) {
//     console.log(iterator);
// }

// Arrays Method
// let b = arr.toString();
// console.log(b, "  ", typeof b); // string
// let c = arr.join("-");
// console.log(c, "  ", typeof c); // string

// let return_value_for_pop = arr.pop();
// console.log(arr, return_value_for_pop);
// Pop method return popped element
// In this case return "Mahi"(popped element)

// let return_value_for_push = arr.push(6);
// console.log(arr, return_value_for_push);
// Push method return length of array
// In this case return 5(length)

// let return_value_for_shift = arr.shift();
// console.log(arr, return_value_for_shift);
// This method remove frist element of array

// let return_value_for_unshift = arr.unshift(0);
// console.log(arr, return_value_for_unshift);
// This method add frist element in array
// Return new length of array

// let newArray = arr.concat(arra);
// console.log(newArray);

let arra = [15, 286, 7, 818, 69];
// arra.sort();
// console.log(arra);
// This function only sort alphabetically

// For sorting we need to pass compare function
// const compare = (a, b) => {
//   return a - b;
// };

// arra.sort(compare);
// console.log(arra);
// console.log(arra.reverse());

// splice and slice
// let return_value_for_splice = arr.splice(2, 3, 1111, 2222, 3333, 4444, 5555);
// arrayName.splice(index, how many element delete in your array, newly added element)
// Return deleted element
// console.log(arr, return_value_for_splice);

let newArray = arr.slice(3);
// After provided index from this index it will make new array
console.log(arr);
console.log(newArray);

let newArraySecond = arr.slice(2, 6);
// Strting and ending index
// Ending index not included
console.log(newArraySecond);
