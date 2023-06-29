"use strict";
const body = document.body;
const header = document.querySelector('.header');
const iconMenu = document.querySelector('.header__navigate-icon');
const menu = document.querySelector('.header__navigate');

window.addEventListener('scroll', () => {
	const scrollPosition = window.scrollY;
	if (scrollPosition > 0) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
});

if (iconMenu) {
	iconMenu.addEventListener('click', () => {
		body.classList.toggle('_active');
		menu.classList.toggle('_active');
	});
}
document.addEventListener('DOMContentLoaded', function () {
	var hiddenElements = document.querySelectorAll('.hidden');
	console.log(hiddenElements);

	function isElementInViewport(element) {
		var rect = element.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	function handleScroll() {
		hiddenElements.forEach(function (element) {
			if (isElementInViewport(element)) {
				element.classList.add('visible');
			}
		});

		// Optional: Remove the event listener when all elements are visible
		if (document.querySelectorAll('.hidden.visible').length === hiddenElements.length) {
			window.removeEventListener('scroll', handleScroll);
		}
	}

	window.addEventListener('scroll', handleScroll);

	// Call handleScroll() once on page load
	handleScroll();
});

