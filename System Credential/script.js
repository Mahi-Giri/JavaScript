function User(displayName) {
    this.displayName = displayName;
}

const systemCredentials = {
    username: "system",
    password: "pass123"
};

User.prototype.login = function (username, password) {
    if (username === systemCredentials.username && password === systemCredentials.password) {
        console.log("Login successful!");
    } else {
        console.log("Login failed!");
    }
};

const user = new User("John Doe");
 
const loginFunction = User.prototype.login.bind(systemCredentials)

loginFunction("system", "pass123"); 
loginFunction("wrongUsername", "wrongPassword");