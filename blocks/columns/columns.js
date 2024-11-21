import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
	  const picLink = col.querySelector('div > a');

	  if(picLink && picLink.href.includes('/images')){
		const picture = createOptimizedPicture(picLink.href, picLink.title, false);
		const picWrapper = picLink.closest('div');
		picWrapper.append(picture);
		if (picWrapper && picWrapper.children.length === 1) {
			picWrapper.classList.add('columns-img-col');
		}
		picLink.remove();
	  }


      if (pic) {
        const picWrapper = pic.closest('div');
		if (picWrapper && picWrapper.children.length === 1) {
			picWrapper.classList.add('columns-img-col');
		  }
	  } else if(picLink) {

      }
    });
  });
}
