

/**
 * Set the height of the gradient bursts container to the height of the document
 */
function setContainerHeight() {
	var container = document.querySelector('.gradient-bursts-container');
	container.style.height = document.body.scrollHeight + 'px';
}

window.addEventListener('load', setContainerHeight);
window.addEventListener('resize', setContainerHeight);