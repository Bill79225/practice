const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

const theLastOfWatchedFilms = prompt("Один из последних просмотренных фильмов?", "");
const rating = prompt("На сколько вы его оцените?","");

personalMovieDB.movies.theLastOfWatchedFilms = rating;

console.log(personalMovieDB);