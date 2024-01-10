let marks = {
  Mahi: 21,
  Mahesh: 65,
  Priti: 15,
  Monika: 68,
};

// console.log(Object.keys(marks));
// console.log(Object.keys(marks).length);

// Problem 1
// Using Plain for loop
for (let i = 0; i < Object.keys(marks).length; i++) {
  //   console.log(Object.keys(marks)[i] + " --> " + marks[Object.keys(marks)[i]]);
}

// Problem 2
// Using For in loop
for (let i in marks) {
//   console.log(i + " --> " + marks[i]);
}

// Problem 3
// mean of 4 no make function

const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};

console.log(mean(1, 2, 3, 4));
