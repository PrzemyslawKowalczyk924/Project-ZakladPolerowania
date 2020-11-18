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


const actualLink = window.location.href;
console.log('what the Link?', actualLink);

const hamburgerNav = document.querySelector('.hamburger');
hamburgerNav.addEventListener('click', function(){
  navBar.classList.toggle('show-hamburger');
});

window.addEventListener('hashchange', function(){
  const fixedTopNav = document.querySelector('.fixed-top');
  console.log('top', fixedTopNav);
  // eslint-disable-next-line no-constant-condition
  if ('http://localhost:3000/#/contact'){
    navBar.classList.toggle('hide');
    console.log('dybie, bo małe k:', actualLink);
  } else {
    console.log('coś nie pykło', actualLink);
  }
});

if (actualLink == 'http://localhost:3000/#/contact'){
  console.log('dybie, bo:', actualLink);
}
