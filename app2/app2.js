'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('How much films have you seen?');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How much films have you seen?');
  }
}

start();

const personaMovieDb = {
  'count': numberOfFilms,
  'movies': {},
  'actors': {},
  'genres': [],
  'privat': false,
};


function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const firstQuestion = prompt('One of the last films you seen', ""),
      secondQuestion = prompt("Set it's rating", 0);

    if (firstQuestion == '' || firstQuestion == null || secondQuestion == '' || secondQuestion == null || firstQuestion.length > 50) {
      i--;
      continue;
    }
    personaMovieDb.movies[firstQuestion] = secondQuestion;
  }
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personaMovieDb.count < 10 && personaMovieDb.count != 0 && personaMovieDb.count != null)
    alert('So little bit');
  else if (personaMovieDb.count >= 10 && personaMovieDb.count <= 30)
    alert('Classical')
  else if (personaMovieDb.count > 30)
    alert('Kinoman')
  else
    alert('Error');
}

// detectPersonalLevel();

function showMyDb(hidden) {
  if (!hidden)
    console.log(personaMovieDb);
}

showMyDb(personaMovieDb.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Your favorite genre number is ${i}`);
    personaMovieDb.genres[i - 1] = genre;
  }
}

writeYourGenres();
