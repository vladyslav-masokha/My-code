'use strict';

const inputValue = document.getElementById('input-value');
const btnEl = document.getElementById('send-btn');
const numbers = document.getElementsByClassName('numbers');

const genNumbers = () => {
	let num = [];
	for (let i = 0; i < +inputValue.value; i++) {
		num[i] = Math.round(Math.random() * 100);
	}
	return num;
};

const genElement = () => {
	switch (inputValue.value) {
		case '':
			console.error('Error');
			inputValue.placeholder = 'Error, enter text again!';
			inputValue.className = 'for-error';
			break;

		default:
			const spanEl = document.createElement('span');
			const numTextEl = document.createTextNode(genNumbers());
			inputValue.placeholder = 'Enter numbers';
			inputValue.classList.remove('for-error');

			spanEl.append(numTextEl);
			numbers[0].append(spanEl);
			break;
	}
	inputValue.value = '';
};

btnEl.onclick = () => {
	genElement();
};
