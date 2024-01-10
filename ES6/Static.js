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

    static showMsg(name, color) {
        console.log(`The ${name} of the ${color}`);
    }
}

const veh = new Vehical("BMW", "X7", "Black", 4);

veh.getDetails();

Vehical.showMsg("BMW", "Black");

