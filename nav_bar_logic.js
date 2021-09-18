// Create a sticky navigation bar
/*window.onscroll = function() {myFunction()};
const navbar = document.getElementById("navigation-bar");
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
*/


const isMobile = $('.image').css('display');
console.log(isMobile);

// Logic for mobile
if(isMobile == 'none'){
  $('#navigation-bar').css('display', 'none')
  
  
  function myFunction() {
    var x = document.getElementById("navigation-bar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  $('#navigation-bar').on('click', () => {
    if($('#navigation-bar').css('display') == 'none') {
      $('#navigation-bar').css('display', 'block');
    } else {
      $('#navigation-bar').css('display', 'none');
    }
  });

}

// Logic for fullscreen
if(isMobile == 'block'){
  window.onscroll = function() {myFunction()};
  const navbar = document.getElementById("navigation-bar");
  const sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
}