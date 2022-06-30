const getDate = () => {
	const newDate = new Date();
	const localDate = newDate.toDateString();
	document.getElementById('date').innerText = localDate;
};
getDate();

const getTime = () => {
	setTimeout(() => {
		const newDate = new Date();
		const localTime = newDate.toTimeString();
		document.querySelectorAll('.time').forEach(e => {
			e.innerText = localTime;
		});
		getTime();
	}, 1000);
};
getTime();

const getBigLocalTime = () => {
	setTimeout(() => {
		const newDate = new Date();
		const bigLocalTime = newDate.toLocaleTimeString();
		document.getElementById('big-time').innerText = bigLocalTime;
		getBigLocalTime();
	}, 1000);
};
getBigLocalTime();

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
