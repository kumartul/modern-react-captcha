const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

const setTheme = () => {
	const theme = localStorage.getItem('theme');

	if(theme === 'dark') {
		moonIcon.classList.add('hidden');
		sunIcon.classList.remove('hidden');

		document.body.classList.add('dark');
	}
	else {
		sunIcon.classList.add('hidden');
		moonIcon.classList.remove('hidden');

		document.body.classList.remove('dark');
	}
}

const toggleTheme = () => {
	const theme = localStorage.getItem('theme');

	if (theme === 'dark') {
		localStorage.setItem('theme', 'light');

		sunIcon.classList.remove('hidden');
		moonIcon.classList.add('hidden');

		document.body.classList.remove('dark');
	}
	else {
		localStorage.setItem('theme', 'dark');

		moonIcon.classList.remove('hidden');
		sunIcon.classList.add('hidden');

		document.body.classList.add('dark');
	}

	setTheme();
}

moonIcon.addEventListener('click', toggleTheme);
sunIcon.addEventListener('click', toggleTheme);

setTheme();
