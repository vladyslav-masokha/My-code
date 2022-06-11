'use strict';
const DEFAULT_REPEAT = 5;

const genNumbers = () => {
	let num = [];
	for (let i = 0; i < DEFAULT_REPEAT; i++) {
		num[i] = Math.round(Math.random() * 12);
	}
	return num;
};

document.getElementById('send-btn').onclick = () => {
	const randomNumbers = document.getElementById('random-numbers');
	const spanEl = document.createElement('span');
	spanEl.append(genNumbers());
	spanEl.style.color = '#fff';
	randomNumbers.append(spanEl);
};
