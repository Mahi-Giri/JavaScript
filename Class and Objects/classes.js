// Variable
// constructor
// Method

class Car {
    // Constructor
    constructor(brand) {
        this.brand = brand;
        console.log(`${this.brand} is start`);
    }

    // Method
    start() {
        console.log("Start");
    }
    stop() {
        console.log("Stop");
    }
}

// Create object for a class
const toyota = new Car("toyota");
toyota.start();

const BMW = new Car("BMW");
BMW.stop();

const Audi = new Car("Audi");
BMW.stop();
