// // function movie(Title, Year) {
// //     const movie = {
// //         title: Title,
// //         year: Year,
// //         getDetails() {
// //             console.log(`Title: ${this.title} Year: ${this.year}`);
// //         }
// //     };
// //     return movie;
// // }


// // const movies = movie("The Avenger", 2012);
// // console.log(movies);
// // movies.getDetails();


// // Constructor Function
// function Movie(title, year) {
//     this.title = title;
//     this.year = year;
//     this.getDetails = function () {
//         console.log(`Title: ${this.title} Year: ${this.year}`);
//     };
// }

// const movies = new Movie("Iron Man", 2015);
// console.log(movies);
// movies.getDetails();



// Refactoring Constructor Function
function main() {
    function Gadget(brand, type) {
        this.brand = brand;
        this.type = type;

        this.describeGadget = function () {
            return `This gadget is a ${type} from ${brand}.`;
        };
    };

    const gadget = new Gadget("sony", "laptop");
    console.log(gadget.describeGadget());
    return Gadget;
}
main();