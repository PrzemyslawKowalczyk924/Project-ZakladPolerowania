'use strict';

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

//button gallery

const mainDiv = document.querySelector('#main');
console.log(mainDiv);
const buttonGallery = mainDiv.querySelectorAll('.btn-one');
const galleryBar = document.getElementById('gallery');

buttonGallery.forEach(button => {
  button.addEventListener('click', function(event) {
    const clickedElement = this;
    event.preventDefault();
    console.log(clickedElement);
    console.log(button);
    const id = clickedElement.getAttribute('href').replace('#', '');
    console.log(id);
    window.location.hash = '#/' + id;
    mainDiv.classList.remove('active');
    galleryBar.classList.add('active', 'sub-gallery');
  });
});
