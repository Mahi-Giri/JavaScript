function Vehical(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
};

Vehical.prototype.getVehicalDetails = function () {
    console.log(`Name: ${this.name} \n Color: ${this.color} \n Wheels: ${this.wheels}`);
};


function Car(color, Brand, Seats) {
    Vehical.call(this, "BMW","", 4);
    this.color = color;
    this.Brand = Brand;
    this.Seats = Seats;
};

Car.prototype = Object.create(Vehical.prototype);

Car.prototype.getCarDetails = function () {
    console.log(`Name: ${this.name} \nColor: ${this.color} \nWheels: ${this.wheels} \nBrand: ${this.Brand} \nSeats: ${this.Seats}`);
};


const bmw = new Car("Blue","X7", 5);
bmw.getCarDetails();
bmw.getVehicalDetails();


// function Animal() {
//     this.sound = "animal Sound";
// }

// function Cat() {
//     Animal.call(this);
// }

// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;

// Cat.prototype.makeSound = function () {
//     console.log(this.sound);
// }

// const cat = new Cat();

// cat.sound = "Meow";
// cat.makeSound();