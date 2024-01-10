let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach((element, i, a) => {
  // accepting value index and array
  console.log(element * element);
  console.log(element, i, a);
});

// Array.from
// let a = "Mahesh";
// let array = Array.from(a);
// console.log(array);
