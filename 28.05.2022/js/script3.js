'use strict';
const DEFAULT_REPEAT = 6;

let getRandomNumber = (min, max) => {
	min = -50;
	max = 50;
	const numbers = [];
	for (let i = 0; i < DEFAULT_REPEAT; i++) {
		numbers[i] = Math.floor(min + Math.random() * (max - min));
	}
	console.log(numbers);
	return numbers;
};

const resultRandom = getRandomNumber();
const result = resultRandom.filter(a => a >= 0);
console.log(result);

const fruits = ['Banana', 'Apple', 'Cherry', 'Strobery'];
// const freshFruits = fruits.map(() => {
// 	return `Fresh ${fruits}`;
// });
const freshFruits = () => {
	for (let i = 0; i < 1; i++) {
		fruits[i] = `fresh`;
	}
	return fruits;
};
console.log(fruits);
