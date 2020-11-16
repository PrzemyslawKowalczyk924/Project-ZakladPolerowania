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

/*var fixedTopNav = document.querySelector('.fixed-top');
window.addEventListener('scroll', function(){
  fixedTopNav.classList.toggle('top-slider', window.scrollY > 600);
});*/

const navBar = document.querySelector('.navigation-menu');
window.addEventListener('scroll', function(){
  
  if (window.location.hash == '' || window.location.hash == '#main'){
    navBar.classList.toggle('show', (window.innerHeight + window.scrollY) >= document.body.offsetHeight);  
  } else {
    navBar.classList.add('show');
  }
});

//const hamburgerNav = document.querySelector('.hamburger');
window.addEventListener('click', function(){
  navBar.classList.toggle('show-hamburger');
});
