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

const workImage = document.querySelectorAll('.img-work');
//const workImgArr = Array.from(workImage);
const photoIcon = document.querySelectorAll('.old-camera');
console.log(photoWrapper)

console.log(workImage)
//console.log(workImgArr)
console.log(photoIcon)

const photoWrapperArr = Array.from(photoWrapper);
console.log(photoWrapperArr);

//const photoToDis = photoWrapper[1].style.display = 'none';

//problem byl chyba w piętli. Możliwe, że dlatego transitioned nie działało. Prawodpodobnie nie powinno jej tutaj być. 
//Powinienem bezpośrtednio eventy listinerów wykonywać na poszczególnych elementach: img + ikona. Wtedy nasluchiwacze będąc ciągle aktywne, a 
//możliwe, że dltego nie działał mi transitioned poprawnie, gdyż pętla wykonyje się raz dla każdego elementu. Stąd to niepodliczenie końcowe transitioned

for(let elem of photoWrapperArr) {
  elem.addEventListener('mouseenter', (event) => {
    console.log('enter')
    photoWrapper[1].style.transform = 'translate(-28px, -20px)',
    photoWrapper[1].style.transition = '1s'
    if(event.target == photoWrapper[0]) {
      photoWrapper[1].style.opacity = '1'
    }
    if(event.target == photoWrapper[1]) {
      photoWrapper[0].style.transform = 'translate(-28px, -20px)',
      photoWrapper[0].style.transition = '1s'
    }

    //console.log(event.target);
  })
  
  elem.addEventListener('mouseleave', (event) => {
    photoWrapper[0].style.transform = 'translate(28px, 20px)',
    photoWrapper[0].style.transition = '1s'
    photoWrapper[1].style.transform = 'translate(-28px, -20px)',
    photoWrapper[1].style.opacity = '0'
  /*   if (event.target != photoWrapper[0]) {
      console.log('leave')
    }
 */
 /*  if(event.target != photoWrapper[1]) {
    photoWrapper[0].style.transform = 'translate(28px, 20px)',
    photoWrapper[0].style.transition = '1s'
  } */
})
}