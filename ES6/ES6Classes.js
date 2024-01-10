// // Constructor Functions
// function Vehical(name, color, wheels) {
//     this.name = name;
//     this.color = color;
//     this.wheels = wheels;

//     this.getDetails = function () {
//         console.log(`The ${this.name} is ${this.color} in color. It has ${this.wheels} wheels`);
//     };
// }

// // const car = new Vehical('car', 'blue', 4);
// // car.getDetails();


// Classes in JS
class VehicalCL {
    // // Properties
    // name;
    // color;
    // wheels;

    // Constructor Function (Optional)
    constructor(name, color, wheels) {
        this.name = name;
        this.color = color;
        this.wheels = wheels;
    }

    // Methods
    getDetails() {
        console.log(`The ${this.name} is ${this.color} in color. It has ${this.wheels} wheels`);
    };
}

// Instance 
const car = new VehicalCL('BMW', 'Black', 4);
car.getDetails();


// const Dog = class {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} says woof!`);
//     }
// };

// const Cat = class {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} says meow!`);
//     }
// };

// function createAnimal(type) {
//     if (type === "dog") {
//         return new Dog("Buddy");
//     } else if (type === "cat") {
//         return new Cat("Whiskers");
//     } else {
//         return null;
//     }
// };

// const d =createAnimal("dog");
// d.speak();


//Convert the class and it methods to the required format.
// //Do not modify the names .The names should be as it is in the given code.

function main() {
    class Car {
        constructor(make, model, year, color, mileage) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.color = color;
            this.mileage = mileage;
        }

        getMake() {
            return this.make;
        }
        
        getModel() {
            return this.model;
        }

        getYear() {
            return this.year;
        }

        getColor() {
            return this.color;
        }

        getMileage() {
            return this.mileage;
        }
    }
    const myCar = new Car("Toyota", "Camry", 2020, "blue", 5000);
    console.log(myCar.getMake());
    console.log(myCar.getModel());
    console.log(myCar.getYear());
    console.log(myCar.getColor());
    console.log(myCar.getMileage());
    console.log(myCar.drive());
    //Do not modify the return statement;
    return Car;
}
main();