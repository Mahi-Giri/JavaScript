const Dog = class {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} says woof!`);
    }
};

const Cat = class {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} says meow!`);
    }
};

function createAnimal(type) {
    if (type === "dog") {
        return new Dog("Buddy");
    } else if (type === "cat") {
        return new Cat("Whiskers");
    } else {
        return null;
    }
};

const d = createAnimal("cat");
d
d.speak();