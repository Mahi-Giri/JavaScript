class Person {
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("Sleep");
    }
}


class Engineer extends Person {
    work() {
        console.log("Solve Proble");
    }
}

class Doctor extends Person {
    work() {
        console.log("Treat patients");
    }
}

const Mahi = new Engineer();
const Mahesh = new Doctor();
Mahi.eat();

Mahesh.eat()
Mahesh.work()
Mahesh.sleep()
