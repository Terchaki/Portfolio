const btnMenu = document.getElementById('btn-menu');

function AlternarMenu (event) {
	
	if (event.type === 'touchstart') event.preventDefault ();

	const nav = document.getElementById('nav');
		nav.classList.toggle('active');

};

btnMenu.addEventListener('click', AlternarMenu);
btnMenu.addEventListener('touchstart', AlternarMenu);