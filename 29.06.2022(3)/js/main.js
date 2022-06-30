// Render template
const render = (template, payload) => {
	return Object.keys(payload).reduce((tpl, key) => {
		return tpl.replaceAll(`{{${key}}}`, payload[key]);
	}, template);
};

const templateListItem =
	document.getElementById('template-list-item').innerHTML;
const btnEl = document.getElementById('send-item');
const fullListEl = document.getElementById('list');

const arrItem = [
	{ itemValue: 'Hello' },
	{ itemValue: 'World' },
	{ itemValue: '!' },
	{ itemValue: 'Hello World!' },
	{ itemValue: `<hr>` },
];

function showItem() {
	fullListEl.insertAdjacentHTML(
		'afterbegin',
		arrItem.map(e => render(templateListItem, e)).join('')
	);
}

btnEl.addEventListener('click', showItem);


