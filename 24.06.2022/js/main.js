'use strict';

// TODO: Clock
const getClock = () => {
	setTimeout(() => {
		const getNewDate = new Date();
		const getLocalTime = getNewDate.toLocaleTimeString();
		document.getElementById('clock').innerText = getLocalTime;

		const getLocalDate = getNewDate.toLocaleDateString();
		document.getElementById('date').innerText = getLocalDate;

		getClock();
	}, 1000);
};
getClock();

(() => {
	// TODO: User base
	const userBase = [
		{
			username: 'admin',
			email: 'admin@domain.com',
			password: 'hillel',
		},
		{
			username: 'qAdmin',
			email: 'quadmin@domain.com',
			password: '12345',
		},
		{
			username: 'vladyslav',
			email: 'vladyslav@domain.com',
			password: 'vMasokha',
		},
		{
			username: 'admin',
			email: 'admin@domain.com',
			password: 'hillel',
		},
		{
			username: 'admin',
			email: 'admin@domain.com',
			password: 'hillel',
		},
		{
			username: 'qAdmin',
			email: 'quadmin@domain.com',
			password: '12345',
		},
		{
			username: 'vladyslav',
			email: 'vladyslav@domain.com',
			password: 'vMasokha',
		},
		{
			username: 'admin',
			email: 'admin@domain.com',
			password: 'hillel',
		},
		{
			username: 'admin',
			email: 'admin@domain.com',
			password: 'hillel',
		},
		{
			username: 'qAdmin',
			email: 'quadmin@domain.com',
			password: '12345',
		},
		{
			username: 'vladyslav',
			email: 'vladyslav@domain.com',
			password: 'vMasokha',
		},
		{
			username: 'admin',
			email: 'admin@domain.com',
			password: 'hillel',
		},
	];

	// TODO: Inner user base
	const showUserBase = () => {
		userBase.forEach(e => {
			const allBase = `
		<li class='list-el'>Username: <span>${e.username}</span></li>
		<li class='list-el'>Email: <span>${e.email}</span></li>
		<li class='list-el'>Password: <span>${e.password}</span></li>
		<hr>
		`;
			document.querySelector('#list').innerHTML += allBase;
		});
	};
	showUserBase();
})();
