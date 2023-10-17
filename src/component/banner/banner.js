const imgElements = document.querySelectorAll('.whatimg ');
console.log(imgElements);

imgElements.forEach((img) => {
	img.addEventListener('mouseenter', () => {
		const textElement = img.nextElementSibling;
		if (textElement) {
			textElement.style.display = 'none';
		}
	});

	img.addEventListener('mouseleave', () => {
		const textElement = img.nextElementSibling;
		if (textElement) {
			textElement.style.display = 'block'; // You can adjust this to the appropriate display property
		}
	});
});
