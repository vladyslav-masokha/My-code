'use strict';

const randomMarks = () => {
	const marks = [];
	for (let i = 0; i < 5; i++) {
		marks[i] = Math.round(Math.random() * 12);
	}
	console.log(`Marks default:`, marks);
	return marks;
};

// TODO: .sort() - sort up
const marks = randomMarks();
let result;
result = marks.sort((a, b) => a - b);
console.log(`Sort Up`, result);

// TODO: .sort() - sort down
result = marks.sort((a, b) => b - a);
console.log(`Sort Down`, result);

// TODO: .map() - mult
result = marks.map(element => {
	return element * 10;
});
console.log(`Mult:`, result);

// TODO: .reduce() - sum
result = result.reduce((a, b) => a + b);
console.log(`Sum:`, [result]);

// TODO: .filter() and .sort()
result = marks.filter(a => a <= 6).sort((a, b) => a - b);
console.log(`filter and sort:`, result);

// ! All methods array
const methods = [
	'join',
	'reverse',
	'sort',
	'push',
	'pop',
	'shift',
	'unshift',
	'splice',
	'concat',
	'slice',
	'indexOf',
	'lastIndexOf',
	'forEach',
	'map',
	'reduce',
	'reduceRight',
	'filter',
	'some',
	'every',
];
result = methods.sort();
console.log(result);
