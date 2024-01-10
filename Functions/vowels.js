function vowels(str) {
    const charArr = [];
    let count = 0;
    for (const element of str) {
        if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u') {
            charArr.push(element);
            count++;
        }
    }
    console.log(charArr);
    console.log(count);
}

const vowelsArrow = (str) => {
    const charArr = [];
    let count = 0;
    for (const element of str) {
        if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u') {
            charArr.push(element);
            count++; 
        }
    }
    console.log(charArr);
    console.log(count);
}



vowels("Mahesh");
vowelsArrow("Mahesh");