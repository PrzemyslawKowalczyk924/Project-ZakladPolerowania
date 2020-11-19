'use strict';

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
    document.getElementById('myLinks').style.display = 'block';
    console.log('bajzel!!!!!');
    navBar.classList.toggle('hide');
    console.log('dybie, bo' + actualLink + 'to sekcja kontakt');
  } else {
    console.log('coś nie pykło', actualLink);
  }
});

