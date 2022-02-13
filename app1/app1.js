"use strict";

const numberOfFilms = +prompt("How much films do you watch already?", "");

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("One of the last film you've seen", ""),
    b = prompt("What is your ratig for it?", 0),
    c = prompt("One of the last film you've seen", ""),
    d = prompt("What is your ratig for it?", 0);

personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;
