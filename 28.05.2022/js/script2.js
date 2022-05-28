'use strict';

let amountOfStudent;
// amountOfStudent = = prompt('How many students in your group?');

// ! Generate student
function getRandomStudent() {
	const students = [];
	for (let i = 0; i < amountOfStudent; i++) {
		students[i] = studentsMock.getStudent();
	}
	console.log('----------------------------------');
	console.log(`Array random students:`, students);
	return students;
}
getRandomStudent();

// ? .filter()
console.log('----------------------------------');
const arr = [12, 423, -65, -6, 2];
console.log(`Default: `, arr);
const result = arr.filter(function (currentValue) {
	return currentValue >= 0;
});
console.log(`Filter: currentValue >= 0:`, result);

// ? .reduce()
console.log('----------------------------------');
const arr2 = [12, 423, -65, -6, 2];
let result2 = arr2.reduce((a, b) => a + b);
console.log(`Sum result2: `, result2);
result2 = result2 / arr2.length;
console.log(`Div result2 on length`, result2);

// ? .map()
console.log('----------------------------------');
const arr3 = [12, 423, -65, -6, 2];
let result3 = arr3.map(a => {
	return a * 3;
});
console.log(`arr3 * 3:`, result3);
console.log('----------------------------------');

// ? .join()
result3 = result3.join(',');
console.log(`join():`, result3);
console.log('----------------------------------');

// ! Default arr
// // FIXME: not working
// // result3.push(Math.random() * 12);
// // console.log(result3);
// // FIXME: not working
// // result3.unshift(12);
// // console.log(result3);

result3 = result3.split(',');
result3 = result3.map(element => +element);
// result3 = result3.reduce((a, b) => a + b);
result3 = result3.map(a => {
	return a / 3;
});
console.log('Default: ', result3);



