const showPassword = () => {
	const passwordFieldEl = document.querySelector('.form__password-field');
	const onShowBtnEl = document.querySelector('.form__password-btn');
	onShowBtnEl.addEventListener('click', () => {
		onShowBtnEl.classList.toggle('active');

		if (passwordFieldEl.getAttribute('type') === 'password') {
			passwordFieldEl.setAttribute('type', 'text');
		} else {
			passwordFieldEl.setAttribute('type', 'password');
		}
	});
};
showPassword();
