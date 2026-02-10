"use strict"

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const movieFilm = prompt('Один из последних просмотренных фильмов?', '');
const retingFilm = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[movieFilm] = retingFilm;
