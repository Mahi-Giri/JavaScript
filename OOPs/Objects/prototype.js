// function Movie(title) {
//     this.title = title;
// }

// const movie1 = new Movie("The Avenger");
// movie1.year = 2015;
// console.log(movie1);

// const movie2 = new Movie("Avatar");
// console.log(movie2);
// console.log(movie1.__proto__);
// console.log(movie2.__proto__);


// function Game(name,platform) {
//     this.name=name;
//     this.platform=platform;
// }

// const fifa = new Game("FIFI 23", "PlayStation");
// console.log(fifa.__proto__ === Game.prototype);
// console.log(fifa.__proto__.__proto__ === Object.prototype);




// function Galaxy(name) {
//     this.name=name;
// }

// const milkyWay = new Galaxy("Milky Way");
// console.log(milkyWay.__proto__.__proto__.__proto__);



// Instructions:
// 1. Refactor the Book constructor to add the method to the prototype chain instead of creating copies.
// 2. Ensure that isClassic method is accessible to all instances of Book object.


function Book(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;


    // Make this function as a prototypal function
    Book.prototype.isClassic = function () {
        const currentYear = 2023;
        const age = currentYear - this.publicationYear;
        if (age >= 50) {
            return "The book is from the classic collection";
        }
        return "The book is not a classic collection book";
    };
}


// Create a few book objects
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1990);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);


// Consoling output
console.log(book1.isClassic()); // Output: 63
console.log(book3.isClassic()); // Output: 98
