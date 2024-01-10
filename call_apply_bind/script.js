const car = {
    name: "car",
    color: "black",
    getdetails(brand, seat) {
        console.log(`This is ${this.color} ${this.name} of ${brand} company. It has ${seat} seats`);
    },
};

const bus = {
    name: 'bus',
    color: 'blue',
};

// Normal calling
car.getdetails("Audi", 5);

// If you want access car object function in bus object without rewring then we use this methods
// Using Call Method
car.getdetails.call(bus, "Star", 50);

// Using Apply Method
car.getdetails.apply(bus, ["gold", 30]);

// Using Bind Method *****
const vehical = car.getdetails.bind(bus);
vehical("Silver", 25);