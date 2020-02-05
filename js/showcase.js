const target = document.querySelector('#showcase-wand');
const trigger = document.querySelector('#enlarge-trigger');
const ratio = 0.6;

io = new IntersectionObserver(entries => {
	if (entries[0].intersectionRatio >= ratio) {
		// Object is visible
		target.classList.add('enlarged');
	} else {
		target.classList.remove('enlarged');
	}
}, {threshold: ratio});

io.observe(trigger);
