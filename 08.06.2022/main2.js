'use strict';

function newEl() {
	const liEl = document.createElement('li');
	// ! Styles for li elements
	liEl.style.listStyle = 'none';
	liEl.style.color = '#000';
	liEl.style.fontSize = '1rem';
	liEl.style.background = '#ffffff8a';
	liEl.style.borderRadius = '10px';
	liEl.style.padding = '10px 15px';
	liEl.style.marginTop = '5px';
	liEl.style.border = '2px dotted #0043a8';

	const inputValueEl = document.getElementById('input-value').value;
	const inputValueTextEl = document.createTextNode(inputValueEl);
	liEl.append(inputValueTextEl);

	if (inputValueEl === '') {
		alert('Repeat enter text');
	} else {
		document.getElementById('todo-list').append(liEl);
	}
	document.getElementById('input-value').value = '';
}

const btnEl = (document.getElementById('send-btn').onclick = () => {
	newEl();
});

const privateMarks = prompt('Enter marks with comma!');
const marks = privateMarks.split(',').map(el => +el);
console.log('Marks =>', marks);
const sumMarks = marks.reduce((a, b) => a + b);
console.log('Sum =>', sumMarks);
