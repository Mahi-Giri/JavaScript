function isValidIdentifier(identifier) {
    // Check if the identifier starts with a valid character
    if (!/^[a-zA-Z_$]/.test(identifier)) {
        console.log(`${identifier} is not a valid identifier.`);
        return false;
    }

    // Check if the remaining characters are valid
    if (!/^[a-zA-Z0-9_$]*$/.test(identifier)) {
        console.log(`${identifier} is not a valid identifier.`);
        return false;
    }

    console.log(`${identifier} is a valid identifier.`);
    return true;
}

// Example function calls
isValidIdentifier("myVariable");
isValidIdentifier("123abc");
isValidIdentifier("_pr&ivate");
