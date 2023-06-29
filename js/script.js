'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const pesonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов', ''),
    b = prompt('На сколько оцените фильм', ''),
    c = prompt('Один из последних просмотренных фильмов', ''),
    d = prompt('На сколько оцените фильм', '');


pesonalMovieDB.movies[a] = b;
pesonalMovieDB.movies[c] = d;

console.log(pesonalMovieDB);