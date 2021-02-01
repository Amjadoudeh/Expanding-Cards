const panels = document.querySelectorAll('.panel');

// activating the image when we click on it 
panels.forEach((panel) => { panel.addEventListener('click', () => {
  removeActiveClasses();
  panel.classList.add('active');
});;
});
// removing the active class for all the images 
function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}