const modal = document.querySelectorAll('.modal'),
	body = document.querySelector('#body');

// functions
function checkCloseTrigger(target, modal, item) {
	if ((target === item) || (target.classList.contains('modal__close'))) {
		closeModalWindow(modal);
	}
}

function openModalWindow(modal) {
	modal.classList.add('active');
	body.classList.add('active-body');
}

function closeModalWindow(modal) {
	modal.forEach(item => {
		item.classList.remove('active');
	});

	body.classList.remove('active-body');
}

function openPage(page, current) {
	page.classList.add('active');
	current.classList.remove('active');
}

// goods
const hoodieItem = document.querySelectorAll('.hoodie__item'),
	modalAbout = document.querySelector('.modal--about');

hoodieItem.forEach(item => {
	item.addEventListener('click', () => {
		openModalWindow(modalAbout);
	});
});

// ordering
// const orderBtn = document.querySelector('#order-btn'),
// 	orderPage = document.querySelector('#order-page');

// orderBtn.addEventListener('click', () => {
// 	openModalWindow(orderPage);
// });

// close-modal
modal.forEach(item => {
	item.addEventListener('click', (e) => {
		const target = e.target;

		checkCloseTrigger(target, modal, item);
	});
});