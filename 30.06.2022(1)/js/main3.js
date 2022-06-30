// function getFullName() {
// 	return `${this.name} ${this.surname}`;
// }

// const student = {
// 	name: 'Bob',
// 	surname: 'Jazik',
// 	getFullName: getFullName,
// };
// console.log(student.getFullName());

// const student2 = {
// 	name: 'Tony',
// 	surname: 'Bobik',
// 	getFullName: getFullName,
// };
// console.log(student2.getFullName());

function doSmt(x, y) {
	console.log('Starting...');
	console.log('Function context: ', this);
	console.log('Function arguments: ', x, y);
	console.log('Finishing...');
}

console.group('Context');
doSmt.apply({ name: 'Vlad', age: 16 }, [100, 228]);
console.log('--------------------------');
doSmt.call({ name: 'Vladyslav', age: 18 }, 'Hello:', 228);
console.log('--------------------------');
doSmt.bind({ name: 'Vladyslav', age: 22 }, 'Hello:', 'Vladyslav')();
console.log('--------------------------');
console.groupEnd();

const liEls = document.getElementsByTagName('li');
const q = Array.from(liEls).forEach((e, i) => (e.innerText = i));

// const z = q.forEach;
// z.forEach(e => e * 2);

// --- not working ---
// const arr5 = [1, 2, 3, 4, 5];

// const qwe = (arr, n) => {
// 	arr.map(function (i) {
// 		return n * i;
// 	});
// };
// console.log(qwe(arr5));

const multBy = () => {
	const arr5 = [1, 2, 3, 4, 5];
	console.group('___All array mult 20___');
	console.log(`Arr5: `, arr5);

	const qa = arr5.map(e => e * 20);
	console.log(`Arr5 * 20: `, qa);
	console.log('--------------------------');
	console.groupEnd();
};
multBy();

const calc = defaultNum => {
	return {
		sum(num) {
			console.log((defaultNum += num));
		},
		sub(num) {
			console.log((defaultNum -= num));
		},
		mult(num) {
			console.log((defaultNum *= num));
		},
		div(num) {
			console.log((defaultNum /= num));
		},
		getResult() {
			return defaultNum;
		},
	};
};

const a = calc(4);

console.group('Calculator');
console.log('sum');
a.sum(10);
console.log('mult');
a.mult(100);
console.log('result: ', a.getResult());
console.log('--------------------------');
console.groupEnd();
