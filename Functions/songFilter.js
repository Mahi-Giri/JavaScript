// const songs = [
//     { title: "All of Me", artist: "John Legend", genre: "Pop", duration: 248 },
//     { title: "Despacito", artist: "Luis Fonsi", genre: "Pop", duration: 279 },
//     { title: "Someone Like You", artist: "Adele", genre: "Pop", duration: 285 },
//     { title: "Thriller", artist: "Michael Jackson", genre: "Pop", duration: 357 },
//     { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock", duration: 354 },
//     { title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "Rock", duration: 480 },
//     { title: "Sweet Child O' Mine", artist: "Guns N' Roses", genre: "Rock", duration: 355 },
//     { title: "Smells Like Teen Spirit", artist: "Nirvana", genre: "Rock", duration: 302 },
//     { title: "Hotel California", artist: "Eagles", genre: "Rock", duration: 390 },
//     { title: "Thrash Unreal", artist: "Against Me!", genre: "Punk", duration: 292 },
//     { title: "London Calling", artist: "The Clash", genre: "Punk", duration: 189 }
// ];

// const filters = { genre: "Rock", duration: 350 };

// function filterSongs(songs, filters) {
//     return songs.filter((song) => {
//         const genreMatch = song.genre === filters.genre;
//         const durationMatch = song.duration >= filters.duration;
//         return genreMatch && durationMatch;
//     });
// }

// // const filteredSong = songs.filter((song) => {
// //     const genreMatch = song.genre === filters.genre;
// //     const durationMatch = song.duration >= filters.duration;
// //     return genreMatch && durationMatch;
// // });

// const filteredSong = filterSongs(songs, filters);
// console.log(filteredSong);



const number = [1,2,3,4,5,2,4,2];
const filtertedNumber = number.filter((element,index,array)=>{
    return array.indexOf(element) === index;
});

console.log(filtertedNumber);