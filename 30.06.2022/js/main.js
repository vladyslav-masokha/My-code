'use strict';

// Local date
function localDate() {
	const newDate = new Date();
	const getLocalDate = newDate.toDateString();
	document.getElementById('local-date').innerText = getLocalDate;
}
localDate();

// Render Template HTML
const render = (template, payload) => {
	return Object.keys(payload).reduce((tpl, key) => {
		return tpl.replaceAll(`{{${key}}}`, payload[key]);
	});
};

(() => {
	const taskValueEl = document.getElementById('input-value');
	const btnSendTaskEl = document.getElementById('btn_send-task');

	const listItemTemplate =
		document.getElementById('list-item-template').innerHTML;

	switch (taskValueEl.value.trim()) {
		case '':
			document.querySelector('.value-error').style.display = 'none;';
			break;

		default:
			break;
	}

	btnSendTaskEl.addEventListener('click',)
})();
