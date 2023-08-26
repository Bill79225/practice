let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

// const a = prompt("Один из последних просмотренных фильмов?", "");
// const b = prompt("На сколько вы его оцените?","");
// const c = prompt("Один из последних просмотренных фильмов?", "");
// const d = prompt("На сколько вы его оцените?","");

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if(10 <= personalMovieDB.count && personalMovieDB.count < 30) {
    console.log ("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log ("Вы киноман");
} else {
    console.log ("Произошла ошибка");
    }
}

detectPersonalLevel();

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", "");
//     const b = prompt("На сколько вы его оцените?","");

//     if (a != null && b != null && a!= "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// }

function rememberMyFilms() {
    let i = 0;
do {
    const a = prompt("Один из последних просмотренных фильмов?", "");
    const b = prompt("На сколько вы его оцените?","");

    if (a != null && b != null && a!= "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
    i++;
    } while (i < 2)
}

rememberMyFilms();

function showMyDB(hid) {
    if (hid === false) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`,""));
    }
}

writeYourGenres();

