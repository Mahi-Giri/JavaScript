class Vehical {
    constructor(name, model, color, wheels) {
        this.name = name;
        this.model = model;
        this.color = color;
        this.wheels = wheels;
    }

    getDetails() {
        console.log(`The ${this.name} of model ${this.model} is a ${this.color} in color. It has ${this.wheels} wheels.`);
    }
}

class Audi extends Vehical {
    constructor(model, color) {
        super("Audi", model, color, 4);
        this.color = color;
        this.model = model;
    }
}

class BMW extends Vehical {
    constructor(model, color) {
        super("BMW", model, color, 4);
        this.color = color;
        this.model = model;
    }
}


const audi = new Audi("A4", "Black");
const bmw = new BMW("X7", "Blue");

audi.getDetails();
bmw.getDetails();
 