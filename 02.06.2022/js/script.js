'use strict';

const randomMarks = () => {
	const amountOfMarks = 5;
	let marks = [];
	for (let i = 0; i < amountOfMarks; i++) {
		marks[i] = Math.floor(Math.random() * 12);
	}
	return marks;
};

const arrMarks = [1, 4, 7, 10, 2, 5, 8, 11, 12, 3];
let result = arrMarks.map(a => a * 2);
console.log(result);

let allSum = result.reduce((a, b) => a + b);
console.log(allSum);

let typeString = allSum.toString();
console.log(typeString);

let typeNumber = +typeString;
console.log(typeNumber);

let mult = [typeNumber];
console.log(mult);

mult.push(12);
console.log(mult);

mult = mult.map(a => a * 2);
console.log(mult);
mult = mult.map(a => a / 10);
console.log(mult);

let sum = mult.reduce((a, b) => a + b);
console.log(Math.round(sum));
