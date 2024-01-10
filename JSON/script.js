const jsonString = '{"Name": "John", "Age": 30,"City": "New York"}';

const obj = JSON.parse(jsonString);

console.log(obj.Name);
console.log(obj.Age);
console.log(obj.City);