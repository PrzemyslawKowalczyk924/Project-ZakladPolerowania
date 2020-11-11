'use strict';

function toggleMenu(visible) {
  document.querySelector('.navigation-menu').classList.toggle('show', visible);
  console.log('got it?', document);
}

document.querySelector('.nav-svg-icon').addEventListener('click', function(event){
  event.preventDefault();
  toggleMenu();
  console.log('got it?', toggleMenu);
});
