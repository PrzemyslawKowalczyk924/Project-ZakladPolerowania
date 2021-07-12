//Add this code to HTML
{/* <section class="splasher">
<div class="carousel">
    <img class="photofixed" src="https://images.pexels.com/photos/2850515/pexels-photo-2850515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
    <img class="photofixed" src="https://cdn.pixabay.com/photo/2014/09/01/01/07/aluminium-432524_960_720.jpg"/>
</div>
</section> */}

const carousel = document.querySelector('.carousel');
const slidesAmount = document.querySelectorAll('.carousel img').length;
let currentSlide = 1;
console.log('carousel', carousel);
const moveSlide = function() {
  
  if(currentSlide === slidesAmount) {
    carousel.style.left = '0';
    currentSlide = 1;
  } else {
    carousel.style.left = `-${100 * currentSlide}%`;
    currentSlide++;
  }
}

setInterval(moveSlide, 3000);
