'use strict';
document.body.style.background = '#000';

const a1 = [1, 2, 3, 4, 5];
const a2 = [10, 20, 30, 40, 50];
const a3 = [100, 200, 300, 400, 500];

// Method .concat()
const b = a1.concat(a2);
const c = a2.concat(a1, a3);
console.log(b);
console.log(c);

// Method .copyWithin()
a1.copyWithin(3, 0);
a2.copyWithin(0, 3);
console.log(a1);
console.log(a2);

// Method .entries() - I don't understand
const d = a1.entries();
console.log(d);

// Method .every()
const i = a1.every(e => {
	if (e > 1) {
		return true;
	}
});

const a4 = [
	{ name: 'Bob', age: 17 },
	{ name: 'Ivan', age: 27 },
	{ name: 'Lola', age: 22 },
	{ name: 'John', age: 19 },
];

console.log(i);
const f = a4.every(e => {
	if (e.age > 16) {
		return true;
	}
});
console.log(f);

// Method .fill()
a1.fill(16, 0);
a2.fill(16, 0, 2);
a3.fill(2022, 2, 4);
console.log(a1);
console.log(a2);
console.log(a3);

// Method .filter()
const h = a4.filter(e => {
	return e.age > 20;
});
const e = a3.filter(e => {
	return e > 2000;
});
console.log(h);
console.log(e);
