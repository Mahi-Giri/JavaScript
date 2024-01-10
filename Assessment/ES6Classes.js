function main() {
    class Person {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }

        speak() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }

    class Student {
        constructor(person, major, gpa) {
            this.person = person;
            this.major = major;
            this.gpa = gpa;
        }

        study() {
            console.log(`I am studying ${this.major} and my GPA is ${this.gpa}.`);
        }

        speak() {
            const { name, age } = this.person;
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am also a student studying ${this.major}.`);
        }
    }
    return { Person, Student };
}


const { Person, Student } = main();

const person = new Person("John", 20, "M");
person.speak();

const stud = new Student(person, "CS", 9);
stud.speak();
