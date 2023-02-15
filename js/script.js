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
  //navBar.classList.toggle('show'); z jakiegoś powodu tutaj mamm nieistniejący navBar
});

window.addEventListener('hashchange', function(){
  const fixedTopNav = document.querySelector('.fixed-top');
  //console.log('top', fixedTopNav);
  // eslint-disable-next-line no-constant-condition
  if (window.location.hash == 'http://localhost:3000/#/contact'){
    //document.getElementById('myLinks').style.display = 'block';
    navBar.classList.add('hide');
  } 
  if(window.location.hash == 'http://localhost:3000/#/gallery'){
    document.getElementById('myLinks').style.display = 'none';
  }
});

//icon-animation

const galleryBar = document.getElementById('gallery');
const aboutBar = document.getElementById('about');

const workImage = document.querySelectorAll('.img-work');
const workImgArr = Array.from(workImage);

const photoIcon = document.querySelectorAll('.old-camera');
const photoIconArr = Array.from(photoIcon);

function ImgAndIconListener(photo, icon) {

 for(let index = 0; index < photo.length; index++) {

  photo[index].addEventListener('mouseenter', () => {
    icon[index].style.transform = 'translate(-28px, -20px)';
    icon[index].style.opacity = '1';
  
    photo[index].style.transform = 'translate(-28px, -20px)';
    photo[index].style.transition = '1s';
  });

  photo[index].addEventListener('mouseleave', () => {
    icon[index].style.transform = 'translate(28px, 20px)';
    photo[index].style.transform = 'translate(0, 0)';

  if(icon[index].style.transform == 'translate(28px, 20px)') {
    icon[index].style.opacity = '0';
  }});

  icon[index].addEventListener('mouseenter', event => {
    if(event.target == icon[index]) {
      photo[index].style.transform = 'translate(-28px, -20px)';
      icon[index].style.transform = 'translate(-28px, -20px)';
      icon[index].style.opacity = '1';
      icon[index].addEventListener('click', () => {
        window.location.hash = '#/gallery';
        aboutBar.classList.remove('active');
        galleryBar.classList.add('active', 'sub-gallery');
        photo[index].style.transform = 'translate(0, 0)';
        icon[index].style.transform = 'translate(28px, 20px)';
        icon[index].style.opacity = '0';
      });
    }
  });
 }
}

ImgAndIconListener(workImgArr, photoIconArr);

console.log(window.location.hash);

console.log(galleryBar);

const screenWidth = window.screen.width;
console.log(screenWidth);
