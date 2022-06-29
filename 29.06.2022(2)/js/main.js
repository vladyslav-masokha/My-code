const localTime = () => {
	setTimeout(() => {
		const newDate = new Date();
		const getLocalTime = newDate.toLocaleTimeString();
		document.getElementById('time').innerText = getLocalTime;
		localTime();
	}, 1000);
};

localTime();

const localDate = () => {
	const newDate = new Date();
	const getLocalDate = newDate.toDateString();
	document.getElementById('date').innerText = getLocalDate;
};

localDate();

const themeSwitchers = document.querySelectorAll('.change-theme');
themeSwitchers.forEach(e => {
	e.addEventListener('click', function () {
		applyTheme(this.dataset.theme);
		localStorage.setItem('theme', this.dataset.theme);
	});
});

function applyTheme(themeName) {
	let themeUrl = `css/theme-${themeName}.css`;
	document.querySelector('[title="theme"]').setAttribute('href', themeUrl);
}

let activeTheme = localStorage.getItem('theme');
if (activeTheme === null) {
	applyTheme('light');
} else {
	applyTheme(activeTheme);
}
