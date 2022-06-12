'use strict';

// ! TodoList
const inputValueEl = document.getElementById('input-value');
const listEl = document.getElementById('list');

const newLiElement = () => {
	const liEl = document.createElement('li');
	const inputValueTextEl = document.createTextNode(inputValueEl.value);
	liEl.append(inputValueTextEl);

	switch (inputValueEl.value) {
		case '':
			inputValueEl.placeholder = 'Error, enter text again!';
			inputValueEl.className = 'for-error';
			break;

		default:
			listEl.prepend(liEl);
			inputValueEl.placeholder = 'Enter text';
			inputValueEl.classList.remove('for-error');
			inputValueEl.value = '';
			break;
	}
};

// TODO: Event click on button
document.getElementById('btn-send').onclick = () => {
	newLiElement();
};

// ! Random Numbers List
const amountValueEl = document.getElementById('amount-value');
const numbersListEl = document.getElementById('numbers-list');

const genNumber = () => {
	let num = [];
	const liEl = document.createElement('li');

	switch (amountValueEl.value) {
		case '':
			amountValueEl.placeholder = 'Error, enter number of numbers again';
			amountValueEl.className = 'for-error';
			break;

		default:
			for (let i = 0; i < +amountValueEl.value; i++) {
				num[i] = Math.round(Math.random() * 100);
				liEl.prepend(num[i] + ' ');
			}
			listEl.prepend(liEl);
			numbersListEl.prepend(liEl);
			amountValueEl.placeholder = 'Enter number of numbers';
			amountValueEl.classList.remove('for-error');
			break;
	}

	amountValueEl.value = '';
};

document.getElementById('amount-send').onclick = () => {
	genNumber();
};
