export default function decorate(block) {
	const blockBgImgLink = block.querySelector('div > a');

	const blockWrapper = block.querySelector('div');
	blockWrapper.classList.add('bg-image')
	blockWrapper.style = `background-image: url(${blockBgImgLink.href}`
	blockBgImgLink.remove();

	// if two images are added to the content documentn - desktop is first image, mobile is second
	const blockImages = block.querySelectorAll('picture');

	if(blockImages.length > 1){
		// media query match that indicates mobile/tablet width
		const isDesktop = window.matchMedia('(min-width: 767px)');

		function toggleImage() {
			const mobileImage = blockImages[1];
			const desktopImage = blockImages[0];
			
			if(isDesktop.matches){
				mobileImage.closest('div').className = 'hidden';
				desktopImage.closest('div').className = '';
			} else {
				desktopImage.closest('div').className = 'hidden';
				mobileImage.closest('div').className = ''
			}
		}

		toggleImage();
		isDesktop.addEventListener('change', () => toggleImage());
	}
}