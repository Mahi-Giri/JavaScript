// const movie = {
//     title: "The Avenger",
//     year: 2012,
//     genre: "Action, Sci-Fi",
//     cast: ["Robert Downey js., Chris Evans"],
//     getDetails: function () {
//         console.log(`Title: ${movie.title}\nYear: ${movie.year}\nGenre: ${movie.genre}\nCast: ${movie.cast}`);
//     },
//     getMovieDetails: function (details) {
//         // We can use dot (.) for accessing details because details is variable 
//         console.log(movie[details]);
//     },
// };

// // console.log(movie.title);
// // movie.getDetails();

// movie.getMovieDetails('title');


let obj = {
    name: "Jack",
};

obj.age = 24;
obj["class"] = 5;
obj = { ...obj, sec: 'B' }

console.log(obj);