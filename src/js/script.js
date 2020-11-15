'use strict';

/*function toggleMenu(visible) {
  document.querySelector('.navigation-menu').classList.toggle('show', visible);
  console.log('got it?', document);
}

document.querySelector('.navigation-menu').addEventListener('click', function(event){
  event.preventDefault();
  toggleMenu();
  console.log('got it?', toggleMenu);
});*/

var fixedTopNav = document.querySelector('.fixed-top');
window.addEventListener('scroll', function(){
  fixedTopNav.classList.toggle('top-slider', window.scrollY > 600);
});

window.addEventListener('scroll', function(){
  const navBar = document.querySelector('.navigation-menu');
  
  if (window.location.hash == '' || window.location.hash == '#main'){
    navBar.classList.toggle('show', window.scrollY > 3000);  
  } else {
    navBar.classList.add('show');
  }
});
