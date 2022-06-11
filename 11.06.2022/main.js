'use strict';

const inputValueEl = document.getElementById('input-value');
const todoListEl = document.getElementById('todo-list');

const newElement = () => {
	// ! Create li element
	const liEl = document.createElement('li');

	const inputValueTextEl = document.createTextNode(inputValueEl.value);
	liEl.append(inputValueTextEl);
	switch (inputValueEl.value) {
		case '':
			console.error('Error, enter text again!');
			break;

		default:
			document.getElementById('todo-list').append(liEl);
			break;
	}

	document.getElementById('input-value').value = '';

	// ! Create close element
	const spanEl = document.createElement('span');
	const closeTextEl = document.createTextNode('\u00D7');
	spanEl.id = 'del-elem';
	liEl.append(spanEl);
	spanEl.append(closeTextEl);
};

document.getElementById('send-btn').onclick = () => {
	newElement();
};

// ? User
const userName = prompt('Hello user, what is your name?');

const helloUser1 = (document.getElementById(
	'hello-user1'
).outerHTML = `<span id="hello-user1">Hello, ${userName} <br> It's outerHTML</span>`);
const helloUser2 = (document.getElementById(
	'hello-user2'
).innerHTML += `<br> Hello, ${userName} <br> It's innerHTML</span>`);
