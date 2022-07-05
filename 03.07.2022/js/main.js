const changeThemeBtn = document.querySelector('.change-theme');

function lightTheme() {
	document.body.classList.remove('active');
	changeThemeBtn.setAttribute('class', 'fa-solid fa-moon change-theme');
	localStorage.theme = 'light';
}

function darkTheme() {
	document.body.classList.add('active');
	changeThemeBtn.setAttribute('class', 'fa-solid fa-sun change-theme');
	localStorage.theme = 'dark';
}

const changeTheme = () => {
	if (document.body.classList.contains('active')) {
		lightTheme();
	} else {
		darkTheme();
	}
};
changeThemeBtn.addEventListener('click', changeTheme);

if (localStorage.getItem('theme') === 'dark') {
	darkTheme();
} else if (localStorage.getItem('theme') === 'light') {
	lightTheme();
}

const localTime = () => {
	setTimeout(() => {
		const newDate = new Date();
		const getLocalTime = newDate.toLocaleTimeString();
		document.getElementById('local-clock').innerText = getLocalTime;
		localTime();
	}, 1000);
};
localTime();
