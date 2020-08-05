"use strict";

const numberOfFilms = prompt("Сколко фильмов вы уже просмотрели?", '');



const personalMovieDB = { 
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};






// for (let i = 0; i < 2; i++) {
	
// 	const a = prompt('Один из последних просмотренних фильмов?', ''),
// 		  b = prompt('На сколько оцените его?', '');


// 		  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 			personalMovieDB.movies[a] = b;
// 			console.log('done');
// 		  } else {
// 			  console.log('error');
// 			  i--;
// 		  }
		 
// }


//hometask for while

// let i = 0;
// while (i < 2) {
	
// 	const a = prompt('Один из последних просмотренних фильмов?', ''),
// 		  b = prompt('На сколько оцените его?', '');


// 		  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 			personalMovieDB.movies[a] = b;
// 			console.log('done');
// 		  } else {
// 			  console.log('error');
// 			  i--;
// 		  }
// 		i++; 
// }

// hometask for do while

let i = 0;
do {
	
	const a = prompt('Один из последних просмотренних фильмов?', ''),
		  b = prompt('На сколько оцените его?', '');


		  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		  } else {
			  console.log('error');
			  i--;
		  }
	i++;
}
while (i < 2);





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

console.log(personalMovieDB);


