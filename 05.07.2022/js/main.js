const addTask = () => {
	const taskValueEl = document.getElementById('task-value');
	const taskValueErrorEl = document.querySelector('.block-error');
	const toDoListEl = document.getElementById('list');

	switch (taskValueEl.value.trim()) {
		case '':
			taskValueErrorEl.style.display = 'block';
			break;

		default:
			taskValueErrorEl.style.display = 'none';

			// Create li element
			const liEl = document.createElement('li');
			liEl.setAttribute('class', 'item');
			const taskValue = document.createTextNode(taskValueEl.value);
			liEl.prepend(taskValue);
			toDoListEl.append(liEl);

			// Create button trash
			const onBtnEl = document.createElement('button');
			const trashIcon = document.createElement('i');
			trashIcon.setAttribute('class', 'fa-solid fa-trash-can');
			onBtnEl.append(trashIcon);
			liEl.append(onBtnEl);

			// Button for delete all items
			document.getElementById('del-btn').addEventListener('click', () => {
				liEl.remove();
			});
			break;
	}
	taskValueEl.value = '';
};
document.getElementById('task-btn').addEventListener('click', addTask);
document.getElementById('task-value').addEventListener('keyup', e => {
	if (e.keyCode === 13) {
		addTask();
	}
});

// Local date
const localDate = () => {
	const newDate = new Date();
	const getLocalDate = newDate.toDateString();
	document.querySelector('.local-date').innerText = getLocalDate;
};
localDate();

// Local time
const localTime = () => {
	setTimeout(() => {
		const newDate = new Date();
		const getLocalTime = newDate.toLocaleTimeString();
		document.querySelector('.local-time').innerText = getLocalTime;
		localTime();
	}, 1000);
};
localTime();

// Local date and time
const localDateTime = () => {
	setTimeout(() => {
		const newDate = new Date();
		const getLocalTime = newDate.toLocaleString();
		document.querySelector('.dates').innerText = getLocalTime;
		localDateTime();
	}, 1000);
};
localDateTime();
