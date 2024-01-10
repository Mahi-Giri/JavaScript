function reverseString(str) {
    let arr = str.split("");
    let reversed = arr.reverse();
    str = reversed.join('');
    return str;
}

console.log(reverseString("Hello"));