const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

const codeBlocks = [...document.querySelectorAll('pre')];

const searchBar = document.getElementById('search');
const sidebarLinks = [...document.querySelectorAll('.sidebar li a')];

// Function: Appends a copy button to each code block
const appendCopyButtonToCodeBlocks = codeBlocks => {
	codeBlocks.forEach(codeBlock => {
		const copyButton = document.createElement('button');
		copyButton.className = 'copy-button';
		copyButton.textContent = 'Copy';

		// Attach a click event listener to the copy button
		copyButton.addEventListener('click', async () => {
			// Using the clipboard API to copy the code
			await navigator.clipboard.writeText(codeBlock.querySelector('code').textContent);

			copyButton.textContent = 'Copied!';

			setTimeout(() => {
				copyButton.textContent = 'Copy';
			}, 750);
		});

		codeBlock.appendChild(copyButton);
	});
}

// Function: Sets the theme based on the local storage
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

// Function: Toggles the theme
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

// Attach a 'keydown' event listener to the search bar
searchBar.addEventListener('keydown', () => {
	const searchValue = searchBar.value.toLowerCase();

	// Iterate through each sidebarLink and if the link text does not contain the
	// search value, hide the link
	sidebarLinks.forEach(sidebarLink => {
		const linkText = sidebarLink.textContent.toLowerCase();

		if(linkText.includes(searchValue)) {
			sidebarLink.parentElement.classList.remove('hidden');
		}
		else {
			sidebarLink.parentElement.classList.add('hidden');
		}
	});
});

moonIcon.addEventListener('click', toggleTheme);
sunIcon.addEventListener('click', toggleTheme);

setTheme();
appendCopyButtonToCodeBlocks(codeBlocks);
