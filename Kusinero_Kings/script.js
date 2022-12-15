
/* Make the socials only appear after scrolling */
const div = document.querySelector('#social');

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
});


/* Pop up window */

let ID;

//When the button is clicked, the pop-up will open.
let openPopUp = function(id) {
  const popUp = document.getElementById(id);
  popUp.style.display = "block";
  ID = id;
}

// close the pop-up
let closePopUp = function() {
  const popUp = document.getElementById(ID);
  popUp.style.display = "none";
}

// close the pop-up when user clicked outside
window.onclick = function(event) {
  const popUp = document.getElementById(ID);
  if (event.target == popUp) {
    popUp.style.display = "none";
  }
}