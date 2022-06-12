'use strict';

//* Variables
//TODO: input-value / btn-send / list
const inputValueEl = document.getElementById('input-value');
const btnEl = document.getElementById('btn-send');
const listEl = document.getElementById('list');

// TODO: Function for new task (new element)
const newTaskEl = () => {
	const liEl = document.createElement('li');
	const inputValueTextEl = document.createTextNode(inputValueEl.value);
	liEl.appendChild(inputValueTextEl);

	switch (inputValueEl.value) {
		case '':
			inputValueEl.className = 'for-error';
			inputValueEl.placeholder = 'Error, enter text again!';
			break;

		default:
			inputValueEl.placeholder = 'Enter text';
			inputValueEl.classList.remove('for-error');
			listEl.prepend(liEl);
			break;
	}
	inputValueEl.value = '';

	// * Button for delete task
	const buttonEl = document.createElement('button');
	buttonEl.innerText = 'delete';
	buttonEl.className = 'del-task';
	liEl.appendChild(buttonEl);

	buttonEl.onclick = () => {
		listEl.removeChild(liEl);
	};
};

// TODO: Event click on button
btnEl.onclick = () => {
	newTaskEl();
};
