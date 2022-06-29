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
