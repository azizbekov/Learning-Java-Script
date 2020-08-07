'use strict';


const options = {
	name: 'test',
	width: 2023,
	height: 3045,
	colors: {
		border: 'black',
		bg: 'red'
	}
};

console.log(Object.keys(options).length.typeof);

let counter = 0;

for (let key in options) {
	if (typeof(options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
			counter++;
		} 
	}
	else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`);
		counter++;
	}
	
}

console.log(counter); 