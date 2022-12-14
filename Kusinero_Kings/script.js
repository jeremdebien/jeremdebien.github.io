
/* Make the socials only appear after scrolling */
const div = document.querySelector('#social');

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
});