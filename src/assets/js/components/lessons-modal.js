const fullscreenBtn = document.querySelector('#fullscreen'),
	modalFullscreen = document.querySelector('.modal--fullscreen'),
	subtractBtn = document.querySelector('#subtract-btn');

fullscreenBtn.addEventListener('click', () => {
	openModalWindow(modalFullscreen);
});

subtractBtn.addEventListener('click', () => {
	closeModalWindow(modal);
});