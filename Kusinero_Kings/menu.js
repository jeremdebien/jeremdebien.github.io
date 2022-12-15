/* Search function */
let search = function() {
    var query = document.getElementById("filter").value;

    var elements = document.getElementsByClassName("menu-item");
  
    var regex = new RegExp(query, "i");
  
    for (var i = 0; i < elements.length; i++) {
        var menuSpan = elements[i].getElementsByTagName("span");
        var menuValue = menuSpan[0].innerHTML; 
  
      if (regex.test(menuValue)) {
        elements[i].style.removeProperty('display');
      } else {
        elements[i].style.display = "none";
      }
    }
  }

/* Collapsing div */
var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    content.classList.toggle("collapsed");
  });
}

/* hide empty categories */
let hide = function() {
    const collapsibleButtons = document.querySelectorAll(".collapsible");
    const menuDiv = document.querySelectorAll(".menu-group");
    let i = 0;
    let checker = true;

    for (let collapsibleButton of collapsibleButtons) {
        const menuGroup = collapsibleButton.nextElementSibling;
        const menuItems = menuGroup.querySelectorAll(".menu-item");

        let allHidden = true;

        for (let menuItem of menuItems) {
            if (menuItem.style.display !== "none") {
              allHidden = false;
            break;
            }
        }

        if (allHidden) {
            collapsibleButton.style.display = "none";
            menuDiv[i].style.display = "none";            
        } else {
            collapsibleButton.style.display = "block";
            menuDiv[i].style.removeProperty('display');
            checker = false;
        }
        i++;
    }
    const div = document.getElementById("noFood");
    if(checker){
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
}
