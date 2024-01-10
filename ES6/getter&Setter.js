class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get dimeters() {
        return this.radius * 2;
    }

    set dimeters(value) {
        if (value >= 0) {
            this.radius = value / 2;
        }
        else {
            console.log("Invalid radius");
        }
    }
}


const circle = new Circle(5);
console.log(circle.radius);


console.log(circle.dimeters);

circle.dimeters = 20;

console.log(circle.dimeters);