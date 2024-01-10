function greet(wish) {
    console.log(`${wish()}, Welcome to the JS`);
}

function sayHi() {
    return "Hi!";
}

function sayHello() {
    return "Hello!";
}

function GoodMorning() {
    return "Good Morning";
}

greet(sayHi);
greet(sayHello);
greet(GoodMorning);