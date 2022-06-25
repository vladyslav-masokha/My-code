'use strict';

(() => {
	const children = [
		{ name: 'Alex', age: 10, school: 47 },
		{ name: 'John', age: 12, school: 54 },
		{ name: 'Bob', age: 14, school: 56 },
		{ name: 'Alice', age: 17, school: 345 },
		{ name: 'Doe', age: 16, school: 156 },
	];

	const contEl = document.getElementById('list-children');

	const showChildren = () => {
		if (Array.isArray(children)) {
			children.forEach(e => {
				contEl.innerHTML += `
				<li>Name: 
					<span>${e.name}</span>
					age:
					<span>${e.age}</span>
					number school:
					<span>${e.school}</span>
				</li>`;
			});
		}
	};

	showChildren();
})();
