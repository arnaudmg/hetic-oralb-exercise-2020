function scrollAnimation(targets, trigger, className, ratio = 0.6) {
	io = new IntersectionObserver(entries => {
		if (entries[0].intersectionRatio >= ratio) {
			targets.forEach(t => { t.classList.add(className) });
		} else {
			targets.forEach(t => { t.classList.remove(className) });
		}
	}, {threshold: ratio});

	io.observe(trigger);
}

scrollAnimation([document.querySelector('#showcase-wand')], document.querySelector('#enlarge-trigger'), 'enlarged');

scrollAnimation([document.querySelector('#showcase-wand')], document.querySelector('#reverse-trigger'), 'reversed');
