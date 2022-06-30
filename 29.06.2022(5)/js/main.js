const render = (template, payload) => {
	return Object.keys(payload).reduce((tpl, key) => {
		return tpl.replaceAll(`{{${key}}}`, payload[key]);
	}, template);
};

const cardsContentEl = document.querySelector('.cards');
const cardTemplate = document.getElementById('card-template').innerHTML;

const arrCard = [
	{
		titleCard: 'Title card',
		cardText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorum temporibus? Eligendi cumque magnam reprehenderit totam ipsa culpa explicabo modi! Beatae consequatur consectetur, id quisquam voluptate necessitatibus placeat cupiditate nam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quam ex debitis sit dicta hic laborum dolorum nihil velit ab aperiam magnam sequi nam aliquid voluptatem minus, iure excepturi perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nesciunt eligendi similique ea facere dolorem accusantium ex temporibus id ab at et rerum, illum eveniet odio architecto deleniti recusandae est.',
		moreReadText: 'More read',
	},
	{
		titleCard: 'Title card',
		cardText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorum temporibus? Eligendi cumque magnam reprehenderit totam ipsa culpa explicabo modi! Beatae consequatur consectetur, id quisquam voluptate necessitatibus placeat cupiditate nam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quam ex debitis sit dicta hic laborum dolorum nihil velit ab aperiam magnam sequi nam aliquid voluptatem minus, iure excepturi perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nesciunt eligendi similique ea facere dolorem accusantium ex temporibus id ab at et rerum, illum eveniet odio architecto deleniti recusandae est.',
		moreReadText: 'More read',
	},
	{
		titleCard: 'Title card',
		cardText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorum temporibus? Eligendi cumque magnam reprehenderit totam ipsa culpa explicabo modi! Beatae consequatur consectetur, id quisquam voluptate necessitatibus placeat cupiditate nam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quam ex debitis sit dicta hic laborum dolorum nihil velit ab aperiam magnam sequi nam aliquid voluptatem minus, iure excepturi perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nesciunt eligendi similique ea facere dolorem accusantium ex temporibus id ab at et rerum, illum eveniet odio architecto deleniti recusandae est.',
		moreReadText: 'More read',
	},
	{
		titleCard: 'Title card',
		cardText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorum temporibus? Eligendi cumque magnam reprehenderit totam ipsa culpa explicabo modi! Beatae consequatur consectetur, id quisquam voluptate necessitatibus placeat cupiditate nam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quam ex debitis sit dicta hic laborum dolorum nihil velit ab aperiam magnam sequi nam aliquid voluptatem minus, iure excepturi perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nesciunt eligendi similique ea facere dolorem accusantium ex temporibus id ab at et rerum, illum eveniet odio architecto deleniti recusandae est.',
		moreReadText: 'More read',
	},
	{
		titleCard: 'Title card',
		cardText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorum temporibus? Eligendi cumque magnam reprehenderit totam ipsa culpa explicabo modi! Beatae consequatur consectetur, id quisquam voluptate necessitatibus placeat cupiditate nam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quam ex debitis sit dicta hic laborum dolorum nihil velit ab aperiam magnam sequi nam aliquid voluptatem minus, iure excepturi perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nesciunt eligendi similique ea facere dolorem accusantium ex temporibus id ab at et rerum, illum eveniet odio architecto deleniti recusandae est.',
		moreReadText: 'More read',
	},
	{
		titleCard: 'Title card',
		cardText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorum temporibus? Eligendi cumque magnam reprehenderit totam ipsa culpa explicabo modi! Beatae consequatur consectetur, id quisquam voluptate necessitatibus placeat cupiditate nam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quam ex debitis sit dicta hic laborum dolorum nihil velit ab aperiam magnam sequi nam aliquid voluptatem minus, iure excepturi perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nesciunt eligendi similique ea facere dolorem accusantium ex temporibus id ab at et rerum, illum eveniet odio architecto deleniti recusandae est.',
		moreReadText: 'More read',
	},
];

cardsContentEl.insertAdjacentHTML(
	'afterbegin',
	arrCard.map(e => render(cardTemplate, e)).join('')
);

const changeTheme = () => {
	const themeSwitchers = document.querySelectorAll('.change-theme');
	themeSwitchers.forEach(e => {
		e.addEventListener('click', function () {
			applyTheme(this.dataset.theme);
			localStorage.setItem('theme', this.dataset.theme);
		});
	});
};
changeTheme();

function applyTheme(themeName) {
	let themeUrl = `css/theme-${themeName}.css`;
	document.querySelector('[title="theme"]').setAttribute('href', themeUrl);
}

const defaultTheme = () => {
	let activeTheme = localStorage.getItem('theme');
	if (activeTheme === null) {
		applyTheme('light');
	} else {
		applyTheme(activeTheme);
	}
};
defaultTheme();
