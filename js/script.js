'use strict';

/* const mainSideHamburger = document.querySelector('.main-side-hamburger');
mainSideHamburger.addEventListener('click', function(){
  navBar.classList.toggle('show');
}); */

/* const navBar = document.querySelector('.navigation-menu');
window.addEventListener('scroll', function(){
  
  if (window.location.hash == '' || window.location.hash == '#/main'){
    navBar.classList.toggle('show', (window.innerHeight + window.scrollY) >= document.body.offsetHeight);  
  } else {
    navBar.classList.add('show');
    console.log('zadziałał show z linijki 11');
  }
}); */

const actualLink = window.location.href;

const hamburgerNav = document.querySelector('.hamburger');
hamburgerNav.addEventListener('click', function(){
  navBar.classList.toggle('show');
});

window.addEventListener('hashchange', function(){
  const fixedTopNav = document.querySelector('.fixed-top');
  console.log('top', fixedTopNav);
  // eslint-disable-next-line no-constant-condition
  if (window.location.hash == 'http://localhost:3000/#/contact'){
    //document.getElementById('myLinks').style.display = 'block';
    console.log('bajzel!!!!!');
    navBar.classList.add('hide');
    console.log('dybie, bo' + actualLink + 'to sekcja kontakt');
  } else {
    console.log('coś nie pykło', actualLink);
    //document.getElementById('myLinks').style.display = 'none';
  }

  if(window.location.hash == 'http://localhost:3000/#/gallery'){
    document.getElementById('myLinks').style.display = 'none';
    console.log('zadziabałoooooo');
  }
});

const photoWrapper = document.querySelectorAll('.work-image > img');
const photoIcon = document.querySelectorAll('.old-camera');

console.log(photoWrapper)

const photoWrapperArr = Array.from(photoWrapper);
console.log(photoWrapperArr);

const photoToDis = photoWrapper[1].style.display = 'none';

/* photoWrapper.addEventListener('transitionend', () => {
  elem.style.display = 'block',
  console.log('mutacja');
})
console.log(photoToDis) */

/* photoToDis.addEventListener('transitionend', () => {
  elem.style.display = 'block',
  console.log('mutacja');
}) */

for(let elem of photoWrapperArr) {
  elem.addEventListener('transitionend', () => {
    photoWrapper[1].style.display = 'block',
    console.log('transistioned');
  })
}

/* photoWrapperArr.addEventListener('transitionend', () => {
  photoIcon.style.display = 'none',
  console.log('transistioned');
  });

 */