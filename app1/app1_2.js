'use strict';

const numberOfFilms = prompt('How much films have you seen?');
const personaMovieDb = {
  'count': numberOfFilms,
  'movies': {},
  'actors': {},
  'genres': [],
  'privat': false
};


for (let i = 0; i < 2; i++) {
  const firstQuestion = prompt('One of the last films you seen', ""),
    secondQuestion = prompt("Set it's rating", 0);

  if (firstQuestion == '' || firstQuestion == null || secondQuestion == '' || secondQuestion == null || firstQuestion.length > 50) {
    i--;
    continue;
  }
  personaMovieDb.movies[firstQuestion] = secondQuestion;
}

if (personaMovieDb.count < 10 && personaMovieDb.count != 0 && personaMovieDb.count != null)
  alert('So little bit');
else if (personaMovieDb.count >= 10 && personaMovieDb.count <= 30)
  alert('Classical')
else if (personaMovieDb.count > 30)
  alert('Kinoman')
else
  alert('Error');
console.log(personaMovieDb);