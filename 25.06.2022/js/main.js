'use strict';

const localTime = () => {
	setTimeout(() => {
		const getDate = new Date(),
			getLocalTime = getDate.toLocaleTimeString();
		document.getElementById('clock').innerText = getLocalTime;
		localTime();
	}, 1000);
};
localTime();

const showStudents = () => {
	// ? Variables
	const numberOfStudentsEl = document.getElementById('count-value'),
		countValueErrorEl = document.querySelector('.count-error'),
		studentListEl = document.getElementById('student-list'),
		onClearListBtnEl = document.querySelector('.clear-list-btn button'),
		numberOfStudentsList = studentsMock.getStudentList(
			+numberOfStudentsEl.value
		),
		studentItemTemplate = document.getElementById(
			'show-student-template'
		).innerHTML;

	// ? Functions
	const render = (template, payload) => {
		return Object.keys(payload).reduce((tpl, key) => {
			return tpl.replaceAll(`{{${key}}}`, payload[key]);
		}, template);
	};

	switch (numberOfStudentsEl.value) {
		case '':
			countValueErrorEl.style.display = 'block';
			break;

		default:
			countValueErrorEl.style.display = 'none';
			studentListEl.insertAdjacentHTML(
				'afterbegin',
				numberOfStudentsList.map(e => render(studentItemTemplate, e)).join('')
			);
			break;
	}
	numberOfStudentsEl.value = '';

	const studentItemEl = document.querySelectorAll('.student');

	if (studentListEl.childElementCount <= 0) {
		countValueErrorEl.style.display = 'block';
	} else {
		countValueErrorEl.style.display = 'none';
		onClearListBtnEl.addEventListener('click', () => {
			[...studentItemEl].forEach(e => {
				e.remove();
			});
		});
	}
};

document.getElementById('count-send').addEventListener('click', showStudents);
document.getElementById('count-value').addEventListener('keyup', e => {
	if (e.key === 'Enter' || e.keyCode === 13) {
		showStudents();
	}
});
