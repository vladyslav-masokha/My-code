document.body.style.background = '#000';

const render = (template, payload) => {
	return Object.keys(payload).reduce((tpl, key) => {
		return tpl.replaceAll(`{{${key}}}`, payload[key]);
	}, template);
};

const arr = [
	{ text: 'Hello World!' },
	{ text: 'Hello World!' },
	{ text: 'Hello World!' },
];

const listEl = document.getElementById('list');
const itemTemplate = document.getElementById('test-template1').innerHTML;

listEl.insertAdjacentHTML(
	'afterbegin',
	arr.map(e => render(itemTemplate, e)).join('')
);

Array.from(listEl.children).forEach(e => (e.style.color = '#fff'));
