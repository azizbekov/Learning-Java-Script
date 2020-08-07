"use strict";

let numberOfFilms;

function start() {
	 numberOfFilms = +prompt("Сколко фильмов вы уже просмотрели?", '');

	 while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколко фильмов вы уже просмотрели?", '');
	 }
}

start();

const personalMovieDB = { 
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};





function rememberMyFilms() {
	
for (let i = 0; i < 2; i++) {
	
	const a = prompt('Один из последних просмотренних фильмов?', ''),
		  b = prompt('На сколько оцените его?', '');


		  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		  } else {
			  console.log('error');
			  i--;
		  }
		 
}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Посмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	}
	  else {
		  console.log('Произошла ошибка');
	  }
}

detectPersonalLevel();   



function showMyDB(en) {
	if (!en) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYuorGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYuorGenres();