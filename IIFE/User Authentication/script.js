function main() {
    const userAuth = (function () {
        const users = [];
        return {
            registerUser: function (userName, password) {
                users.push({ userName, password });
                console.log("The user have been added to the registeredUser array");
            },

            checkCredentials: function (userName, password) {
                for (let i = 0; i < users.length; i++) {
                    if (users[i].userName === userName && users[i].password === password) {
                        console.log("The user already registered");
                        return
                    }
                }
            },
        }
    })();

    userAuth.registerUser("user1", "password123");
    userAuth.checkCredentials("user1", "password123");
    return userAuth;
}

main();
