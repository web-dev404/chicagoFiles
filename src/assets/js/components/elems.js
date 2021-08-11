// elems
const chooseThemeBtn = document.querySelector('#choose-theme'),
	chooseThemeModal = document.querySelector('.profile__menu--3'),
	notificationBtn = document.querySelector('#notification'),
	notificationModal = document.querySelector('.profile__menu--2'),
	arrowDownBtn = document.querySelector('#shop__additional-menu'),
	arrowDownModal = document.querySelector('.profile__menu--1');

chooseThemeBtn.addEventListener('click', () => {
	chooseThemeModal.classList.toggle('active');
});

notificationBtn.addEventListener('click', () => {
	notificationModal.classList.toggle('active');
});

arrowDownBtn.addEventListener('click', () => {
	arrowDownModal.classList.toggle('active');
});

