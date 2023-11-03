addEventListener('DOMContentLoaded', (event) => {
	console.log('hello world');
	const footerTitles = document.querySelectorAll('.item-footer');

	footerTitles.forEach((element) => {
		element.addEventListener('click', () => {
			element.classList.toggle('active');
		});
	});
});
