class Person {
    constructor(name) {
        this.species = "Homo sapiens";
        this.name = name;
    }

    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("Sleep");
    }
}

// Child = Derived
class Engineer extends Person {
    // If I wan't to pass some info to parent we can use super  
    constructor(name) {
        super(name);
    }

    // For accessing parent property in child we need super keyword
    work() {
        super.eat();
        console.log("Solve Proble");
    }
}

const Mahi = new Engineer("Mahesh");
Mahi.work();