'use strict';

const inputValueEl = document.getElementById('input-value');

const newElement = () => {
	const liEl = document.createElement('li');
	const inputValueTextEl = document.createTextNode(inputValueEl.value);
	liEl.append(inputValueTextEl);

	switch (inputValueEl.value) {
		case '':
			alert('Error! Enter text again!');
			break;

		default:
			document.getElementById('todo-list').append(liEl);
			break;
	}

	document.getElementById('input-value').value = '';

	const spanEl = document.createElement('span');
	const closeTextEl = document.createTextNode('\u00D7');
	spanEl.classList.add('close');
	spanEl.append(closeTextEl);
	liEl.append(spanEl);

	for (let i = 0; i < closeEl.length; i++) {
		closeEl[i].onclick = function () {
			const divEl = this.parentElement;
			divEl.style.display = 'none';
		};
	}
};

document.getElementById('send-btn').onclick = () => {
	newElement();
};

const myTodoList = document.getElementsByTagName('li');
for (let i = 0; i < myTodoList.length; i++) {
	const spanEl = document.createElement('span');
	const spanTextEl = document.createTextNode('\u00D7');
	spanEl.classList.add('close');
	spanEl.append(spanTextEl);
	myTodoList[i].append(spanEl);
}

const closeEl = document.getElementsByClassName('close');
for (let i = 0; i < closeEl.length; i++) {
	closeEl[i].onclick = function () {
		const divEl = this.parentElement;
		divEl.style.display = 'none';
	};
}
