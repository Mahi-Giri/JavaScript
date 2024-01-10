// // // Literal Notation 
// // // This form is useful when the pattern is known and doesn't need to be dynamically generated.     
// const regex = /pattern/gi;
// // const regex = /[,]+/;

// // Constructor Notation
// // This form is useful when the pattern needs to be constructed dynamically
// // const regex = new RegExp("pattern");

// const text = "This is Pattern example";
// // const text = "Apple,Banana,Orange";
// const isMatch = regex.test(text);
// const result = regex.exec(text);

// // These expression we use with String
// // match(), matchAll(), replace(), replaceAll(), search(), split()
// const matches = text.match(regex);
// const index = text.search(regex);
// const modifiedText = text.replace(regex, "new Pattern");
// const fruits = text.split(regex);


// console.log(isMatch);
// console.log(result);
// console.log(matches);
// console.log(index);
// console.log(modifiedText);
// console.log(fruits);
// console.log(text);
// console.log(regex.flags);



const inputString = "Hello, {{name}}! How are you, {{name}}?";
const regexPattern = /{{name}}/g;
const modifiedString = inputString.replaceAll("{{name}}", "John");

console.log(modifiedString);