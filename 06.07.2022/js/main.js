const addTaskInput = document.getElementById('description-task');
const addTaskBtn = document.getElementById('add-task-btn');
const todosWrapper = document.querySelector('.todos-wrapper');

let tasks;
!localStorage.tasks
	? (tasks = [])
	: (tasks = JSON.parse(localStorage.getItem('tasks')));

function Task(description) {
	this.description = description;
	this.complated = false;
}

const createTemplate = (task, index) => {
	return `
		<div class="todo-item">
			<div class="description">${task.description}</div>
				<div class="buttons">
					<input class="btn-complate" type="checkbox">
					<button class="btn-delete">Delete</button>
				</div>
		</div>
	`;
};

const fillHtmlList = () => {
	todosWrapper.innerHTML = '';
	if (tasks.length > 0) {
		tasks.forEach((item, index) => {
			todosWrapper.innerHTML += createTemplate(item, index);
		});
	}
};

const updateLocal = () => {
	localStorage.setItem('tasks', JSON.stringify(tasks));
};

addTaskBtn.addEventListener('click', () => {
	tasks.push(new Task(addTaskInput.value));
	updateLocal();
	fillHtmlList();
});
