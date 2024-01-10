let marks = {
  Mahesh: 87,
  Mahi: 98,
  Radha: 89,
  Padmaja: 78,
  Sid: 92,
  Siddhi: 94,
};

// Forin use for accessing Keys
for (let key in marks) {
  console.log(key);
}

// Forof use for accessing Values
// If you want to use forof loop then your object should be iterable
for (let key of "Mahesh") {
  console.log(key);
}   