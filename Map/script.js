const arr = [1, 2, 3, 4, 5, 6, 7];

// Normal Function using Function Keyword
// const squred = arr.map(function(currentElement) {
//     return currentElement* currentElement;
// });

// Arrow function 
const squred = arr.map((currentElement) => {
    return currentElement * currentElement;
});
console.log(squred);