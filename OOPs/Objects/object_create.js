function updateProfile(user, updates) {
    if (Object.isFrozen(user)) {
        console.error("Cannot update a frozen object.");
        return;
    }

    const updatedUser = Object.assign(user, updates);
    return updatedUser;
}

function freezeProfile(user) {
    const froozanUser = Object.freeze(user);
    return froozanUser;
}

const userProfile = {
    username: "abc",
    email: "abc@example.com",
    age: 25,
};

console.log("Before Update:", userProfile);

updateProfile(userProfile, { age: 26, city: "Maharastra" });
console.log("After Update:", userProfile);

freezeProfile(userProfile);

updateProfile(userProfile, { age: 27 });
console.log(userProfile);


