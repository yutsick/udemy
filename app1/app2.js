'use strict';

const numberOfFilms = +prompt('How much films have you seen?');
const personaMovieDb = {
  'count': numberOfFilms,
  'movies': {},
  'actors': {},
  'genres': [],
  'privat': false
};


for (let i = 0; i < 2; i++) {
  let firstQuestion = prompt('One of the last films you seen', "");
  let secondQuestion = prompt("Set it's rating", 0);

  personaMovieDb.movies[firstQuestion] = secondQuestion;
}
console.log(personaMovieDb);