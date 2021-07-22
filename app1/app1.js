"use strict";

let numberOfFilms = +prompt("How much films do you watch already?", "");

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};


console.log(typeof(personaMovieDB));
console.log(personaMovieDB);