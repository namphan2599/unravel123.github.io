const navbar = document.querySelector('.navbar');

window.onscroll = function() {
  console.log(window.pageYOffset)
  if (window.pageYOffset > 0) {
    console.log('> 0');
    navbar.style.backgroundColor  = '#303841';
  } else {
    navbar.style.backgroundColor  = '';
  }
}