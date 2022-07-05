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


document.querySelector('.fa-eye').addEventListener('click', () => {
	document.getElementById('password-hidden').style.display = 'none'
});