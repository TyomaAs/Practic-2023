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
