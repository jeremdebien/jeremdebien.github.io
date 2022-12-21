/* Make the socials only appear after scrolling */
const social = document.querySelector('#social');

window.addEventListener('scroll', function() {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        social.style.display = 'none';
    } else {
        social.style.display = 'block';
    }
  });

let thank = function() {
    alert('Thank you for signing-up!')
}