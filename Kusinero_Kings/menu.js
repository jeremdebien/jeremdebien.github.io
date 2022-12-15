/* Search function */
let search = function() {
    // Get the search query from the input field
    var query = document.getElementById("filter").value;
  
    // Create an array of all the .menu-item elements on the page
    var elements = document.getElementsByClassName("menu-item");
    
    // Create a regular expression with the i flag to do a case-insensitive search
    var regex = new RegExp(query, "i");
  
    // Loop through each .menu-item element
    for (var i = 0; i < elements.length; i++) {
      // Get the text content of the element
        var menuSpan = elements[i].getElementsByTagName("span");
        var menuValue = menuSpan[0].innerHTML; // Fix: access the first element in the array
  
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

        let allMenuItemsHidden = true;

        for (let menuItem of menuItems) {
            if (menuItem.style.display !== "none") {
            allMenuItemsHidden = false;
            break;
            }
        }

        if (allMenuItemsHidden) {
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




/* function search() {
    // Get the search query from the input field
    var query = document.getElementById("filter").value;
  
    // Create an array of all the .menu-item elements on the page
    var elements = document.getElementsByClassName("menu-item");
    
    // Loop through each .menu-item element
    for (var i = 0; i < elements.length; i++) {
      // Get the text content of the element
        var menuSpan = elements[i].getElementsByTagName("span");
        var menuValue = menuSpan[0].innerHTML; // Fix: access the first element in the array
  
      if (menuValue.includes(query)) {
        elements[i].style.display = "block";
      } else {
        elements[i].style.display = "none";
      }
    }
  } */


/* $(document).ready(function(){
    $("#filter").keyup(function(){
 
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;
 
        // Loop through the comment list
        $("div div span").each(function(){
 
            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
 
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
            }
        });
 
        // Update the count
        var numberItems = count;
        $("#filter-count").text("Number of Comments = "+count);
    });
}); */