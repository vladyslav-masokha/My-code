// Local time and date
const localTime = () => {
	setTimeout(() => {
		const newDate = new Date();
		const getLocalTime = newDate.toLocaleTimeString();
		document.getElementById('local-time').innerText = getLocalTime;
		document.getElementById('time').innerText = getLocalTime;
		localTime();
	}, 1000);
};
localTime();

const localDate = () => {
	const newDate = new Date();
	const getDate = newDate.toDateString();
	const getLocalDate = newDate.toLocaleDateString();
	document.getElementById('local-date').innerText = getDate;
	document.getElementById('date').innerText = getLocalDate;
};
localDate();

// Navigation
const navBurger = () => {
	const burgerEl = document.querySelector('.burger');
	const navEl = document.querySelector('.header__nav');
	const bodyEl = document.body;
	const navLinksEls = document.querySelectorAll('.header__nav_link');

	navLinksEls.forEach(e => {
		e.addEventListener('click', () => {
			bodyEl.classList.remove('stop-scroll');
			navEl.classList.remove('nav--visible');
			burgerEl.classList.remove('burger--active');
		});
	});

	burgerEl.addEventListener('click', () => {
		bodyEl.classList.toggle('stop-scroll');
		navEl.classList.toggle('nav--visible');
		burgerEl.classList.toggle('burger--active');
	});
};
navBurger();

// Dark and light theme
const changeThemeBtn = document.querySelector('[data-theme]');

function lightTheme() {
	document.body.classList.remove('dark');
	changeThemeBtn.setAttribute('class', 'fa-solid fa-moon');
	localStorage.theme = 'light';
}

function darkTheme() {
	document.body.classList.add('dark');
	changeThemeBtn.setAttribute('class', 'fa-solid fa-sun');
	localStorage.theme = 'dark';
}

const changeTheme = () => {
	if (document.body.classList.contains('dark')) {
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

// Render HTML Templates
const render = (template, payload) => {
	return Object.keys(payload).reduce((tpl, key) => {
		return tpl.replaceAll(`{{${key}}}`, payload[key]);
	}, template);
};

// Show items methods-array
const showItemMethodsArray = () => {
	const methodsArrayListEl = document.querySelector('.methods-array__content');
	const liItemTemplate = document.getElementById('li-item-template').innerHTML;
	const items = [
		{ name: '.concat()' },
		{ name: '.copyWithin()' },
		{ name: '.entries()' },
		{ name: '.every()' },
		{ name: '.fill()' },
		{ name: '.filter()' },
		{ name: '.find()' },
		{ name: '.findIndex()' },
		{ name: '.forEach()' },
		{ name: '.from()' },
		{ name: '.includes()' },
		{ name: '.indexOf()' },
		{ name: '.isArray()' },
		{ name: '.join()' },
		{ name: '.keys()' },
		{ name: '.lastIndexOf()' },
		{ name: '.map()' },
		{ name: '.copyWithin()' },
		{ name: '.pop()' },
		{ name: '.push()' },
		{ name: '.reduce()' },
		{ name: '.reduceRight()' },
		{ name: '.reverse()' },
		{ name: '.shift()' },
		{ name: '.slice()' },
		{ name: '.some()' },
		{ name: '.sort()' },
		{ name: '.splice()' },
		{ name: '.toString()' },
		{ name: '.unshift()' },
	];

	methodsArrayListEl.insertAdjacentHTML(
		'afterbegin',
		items.map(e => render(liItemTemplate, e)).join('')
	);
};
showItemMethodsArray();

// Show items methods-object
const showItemMethodsObject = () => {
	const methodsObjectListEl = document.querySelector(
		'.methods-object__content'
	);
	const liItemTemplate = document.getElementById('li-item-template').innerHTML;

	const items = [
		{ name: 'Shallow copy — Object.assign()' },
		{ name: 'Deep copy — JSON.parse() & JSON.stringify())' },
		{ name: 'Object.create()' },
		{ name: 'Object.entries()' },
		{ name: 'Object.keys()' },
		{ name: 'Object.values()' },
		{ name: 'Object.freeze()' },
	];

	methodsObjectListEl.insertAdjacentHTML(
		'afterbegin',
		items.map(e => render(liItemTemplate, e)).join('')
	);
};
showItemMethodsObject();

// Show items interacting-with-dom
const showItemInteractingWithDom = () => {
	const interactingWithDomListEl = document.querySelector(
		'.interacting-with-dom__content'
	);
	const liItemTemplate = document.getElementById('li-item-template').innerHTML;

	const items = [
		{ name: '.createElement()' },
		{ name: '.setAttribute()' },
		{ name: '.createTextNode()' },
		{ name: '.getElementById()' },
		{ name: '.append()' },
		{ name: '.prepend()' },
		{ name: '.contains()' },
		{ name: '.classList.add()' },
		{ name: '.classList.remove()' },
		{ name: '.classList.toggle()' },
		{ name: '.getElementsByTagName()' },
		{ name: '.getElementsByClassName()' },
		{ name: '.querySelector()' },
		{ name: '.querySelectorAll()' },
		{ name: '.className' },
		{ name: '.innerHTML' },
		{ name: '.outerHTML' },
		{ name: '.insertAdjacentElement()' },
		{ name: '.insertAdjacentHTML()' },
		{ name: '.insertAdjacentText()' },
		{ name: '.stopPropagation()' },
		{ name: '.stopImmediatePropagation()' },
	];

	interactingWithDomListEl.insertAdjacentHTML(
		'afterbegin',
		items.map(e => render(liItemTemplate, e)).join('')
	);
};
showItemInteractingWithDom();

// Show items interacting-with-dom
const showItemDocumentation = () => {
	const documentationListEl = document.querySelector('.documentation__content');
	const docItemTemplate = document.getElementById('doc-item-template').innerHTML;

	const items = [
		{
			name: 'Рекурсія - ',
			text: 'це коли функція у своєму тілі викликає саму себе. Функцію, що викликає сама себе, називають рекурсивною функцією. Виклик рекурсивної функції називається рекурсивним викликом.',
		},
		{
			name: 'Делегування подій - ',
			text: 'корисний шаблон, тому що дозволяє відстежувати події на безлічі елементів за допомогою лише одного обробника.',
		},
		{
			name: 'Функція - ',
			text: "це об'єкт, що самовикликається.",
		},
		{
			name: 'DOM (Document Object Model) - ',
			text: "це об'єктна модель документа, яку браузер створює в пам'яті комп'ютер на основі HTML-кода отриманого їм від сервера.",
		},
	];

	documentationListEl.insertAdjacentHTML(
		'afterbegin',
		items.map(e => render(docItemTemplate, e)).join('')
	);
};
showItemDocumentation();
