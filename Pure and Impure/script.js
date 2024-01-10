//Refactor the given impure function to pure function.
function removeVowels(obj) {
    return {value : obj.value.replace(/[aeiou]/gi, "")};
}

let strObj = { value: "Hello World" };
let newObj = removeVowels(strObj);
console.log(newObj.value);