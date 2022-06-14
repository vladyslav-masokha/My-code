'use strict';

const inputValueEl = document.getElementById('input-value');
const btnEl = document.getElementById('btn-send');
const myListEl = document.getElementById('list');

const newTask = () => {
	const liEl = document.createElement('li');
	const inputValueTextEl = document.createTextNode(inputValueEl.value);
	liEl.appendChild(inputValueTextEl);

	switch (inputValueEl.value) {
		case '':
			inputValueEl.className = 'for-error';
			inputValueEl.placeholder = 'Error, enter your text again!';
			break;

		default:
			inputValueEl.classList.remove('for-error');
			inputValueEl.placeholder = 'Enter your text...';
			myListEl.prepend(liEl);
			break;
	}
	inputValueEl.value = '';

	//! Buttons for delete task
	const delEl = document.createElement('button');
	delEl.innerText = 'del task';
	delEl.className = 'del-task';

	liEl.appendChild(delEl);

	delEl.onclick = () => {
		myListEl.removeChild(liEl);
	};
};

btnEl.onclick = () => {
	newTask();
};
