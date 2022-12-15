
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
// Get the pop-up

let ID;

// When the user clicks the button, open the pop-up 
let openPopUp = function(id) {
  const popUp = document.getElementById(id);
  popUp.style.display = "block";
  ID = id;
}

// When the user clicks on <span> (x), close the pop-up
let closePopUp = function() {
  const popUp = document.getElementById(ID);
  popUp.style.display = "none";
}

// When the user clicks anywhere outside of the pop-up, close it
window.onclick = function(event) {
  const popUp = document.getElementById(ID);
  if (event.target == popUp) {
    popUp.style.display = "none";
  }
}