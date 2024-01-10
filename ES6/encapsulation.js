class Vehical {
    // This is the private property
    #regNumber;

    constructor(name, color, wheels, number) {
        this.name = name;
        this.color = color;
        this.wheels = wheels;
        this.#regNumber = number;
    }

    // This is the private Method
    #creditCardDetails(credNo, bankName, cvv, pin) {
        console.log(`The ${this.bankName} bank credit card no is ${this.credNo} and this is the ${this.pin}`);
    }

    getDetails() {
        console.log(`The ${this.name} is ${this.color} in color. It has ${this.wheels} wheels`);
        console.log(`Registation No is ${this.#regNumber}`);
    }
    
}

const car = new Vehical("Audi", "Black", 4, 2323);
// car.#regNumber = 1212;
car.getDetails();

// car.#getNumber(12345, "HDFC", 123, 1234);