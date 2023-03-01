'use strict';

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

//hamburger on & off

const hamburgerIcon = document.querySelector('.icon');
const hamburgerDropDown = document.getElementById('hamburgerDropDown');

hamburgerIcon.addEventListener('click', function() {
  if (hamburgerDropDown.style.display === 'block') {
    hamburgerDropDown.style.display = 'none';
  } else {
    hamburgerDropDown.style.display = 'block';
  }
})