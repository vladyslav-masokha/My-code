// document.body.style.background = '#000';

const arr = [
	{ propert: 'Ціна' },
	{ propert: 'За напрямами' },
	{ propert: 'Виробники' },
];
arr.sort((a, b) => (a.propert > b.propert ? 1 : -1));

// const arr2 = [
// 	{ Cena: 123 },
// 	{ Cena: 3425 },
// 	{ Cena: 456 },
// 	{ Cena: 789 },
// 	{ Cena: 123 },
// 	{ Cena: 56756 },
// 	{ Cena: 567 },
// 	{ Cena: 879 },
// 	{ Cena: 678 },
// ];
// arr2.sort((a, b) => (a.Cena > b.Cena ? 1 : -1));

const arr3 = [
	{ Cena: '123' },
	{ Cena: '3425' },
	{ Cena: '456' },
	{ Cena: '789' },
	{ Cena: '56756' },
	{ Cena: '567' },
	{ Cena: '879' },
	{ Cena: '678' },
];
arr3.sort((a, b) => a.Cena - b.Cena);
arr3.push({ Other: 'Hello' });
for (let i = 0; i < arr3.length - 1; i++) {
	arr3[i].Cena = +arr3[i].Cena;
}

const arr4 = [
	{ Wyrobnik: 'Apple' },
	{ Wyrobnik: 'Lenovo' },
	{ Wyrobnik: 'Asus' },
	{ Wyrobnik: 'Acer' },
	{ Wyrobnik: 'HP' },
	{ Wyrobnik: 'Xiaomi' },
];
arr4.sort((a, b) => (a.Wyrobnik > b.Wyrobnik ? 1 : -1));

// Render
const render = (template, payload) => {
	return Object.keys(payload).reduce((tpl, key) => {
		return tpl.replaceAll(`{{${key}}}`, payload[key]);
	}, template);
};

document.body.style.background = '#000';
const testListEl = document.getElementById('list');
const textTemplate2 = document.getElementById('test-template2').innerHTML;

const arr5 = [
	{ Cena: '123', Wyrobnik: 'Apple' },
	{ Cena: '3425', Wyrobnik: 'Lenovo' },
	{ Cena: '456', Wyrobnik: 'Asus' },
	{ Cena: '789', Wyrobnik: 'HP' },
	{ Cena: '56756', Wyrobnik: 'Acer' },
	{ Cena: '567', Wyrobnik: 'Not defined' },
	{ Cena: '879', Wyrobnik: 'Xiaomi' },
	{ Cena: '678', Wyrobnik: 'Not defined' },
];

arr5.sort((a, b) => (a.Wyrobnik > b.Wyrobnik ? 1 : -1));
for (let i = 0; i < arr5.length; i++) {
	arr5[i].Cena = +arr5[i].Cena;
}

testListEl.insertAdjacentHTML(
	'afterbegin',
	arr5.map(e => render(textTemplate2, e)).join('')
);
