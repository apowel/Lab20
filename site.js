// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
function initMap() {

  let blissfield = {lat: 41.832, lng: 83.862};
  let map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: blissfield});
  // The marker, positioned at Uluru
  let marker = new google.maps.Marker({position: blissfield, map: map});
}