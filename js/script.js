"use strict"

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let num = 0;

while (num < 2) {
  const movieFilm = prompt('Один из последних просмотренных фильмов?', '');
  const retingFilm = +prompt('На сколько оцените его?', '');

  num++;

  personalMovieDB.movies[movieFilm] = retingFilm; 
}

