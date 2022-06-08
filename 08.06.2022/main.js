'use strict';

const arr1 = ['Hello', 'world', '!'];
const arr2 = [12, 24, 36, 48, 60];

// ! .concat()
const arr3 = arr1.concat(arr2);
console.log(`Return new array`);
console.log('.contact() =>', arr3);
console.log('----------------------------------');

// ! .map() and .filter()
const arr4 = arr2.map(el => Math.round(el / 12)).filter(e => e <= 1);
console.log(`Return new array`);
console.log(`.map() => [1,2,3,4,5]\n and\n.filter() =>`, arr4);
console.log('----------------------------------');

// ! .unshift()
arr4.unshift('hello');
console.log("Doesn't return new array");
console.log('.unshift() =>', arr4);
console.log('----------------------------------');

// ! .push()
arr4.push('world');
console.log("Doesn't return new array");
console.log('.push() =>', arr4);
console.log('----------------------------------');

// TODO: .concat()
const arr5 = arr4.concat(arr2);
console.log(`Return new array`);
console.log('.concat() =>', arr5);
console.log('----------------------------------');

// ! .reverse()
const arr6 = arr5.reverse();
console.log(`Return new array`);
console.log('.reverse() =>', arr6);
console.log('----------------------------------');

// ! .pop()
arr6.pop(3);
console.log("Doesn't return new array");
console.log('.pop() =>', arr6);
console.log('----------------------------------');

// TODO: .filter() and .reverse()
const arr7 = arr6.filter(e => e <= 100);
const arr8 = arr7.reverse();

// TODO: .push() and Math.(random/round/floor/....)
arr8.map(a => arr8.push(Math.round(Math.random() * 100)));

// ! .sort()
const arr9 = arr8.sort((a, b) => a - b);
console.log('.sort() up =>', arr9);
const arr10 = arr8.sort((a, b) => b - a);
console.log('.sort() down =>', arr9);
console.log('----------------------------------');

// ! .shift()
arr10.shift();
console.log('.shift() =>', arr10);
console.log('----------------------------------');

// ? forEach
const arr11 = arr10.forEach(q => q * 2);
console.log('.forEach() =>', arr11);
console.log('----------------------------------');

// TODO: .filter()
const arr12 = arr10.filter(el => el < 0);

// ? .fill()
const arr13 = arr12.fill;
