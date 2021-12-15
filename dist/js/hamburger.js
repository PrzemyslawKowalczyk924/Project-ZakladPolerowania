/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

function myFunction() {
    var x = document.getElementById('myLinks');
    var y = document.getElementById('pages');

    if (x.style.display === 'block') {
      x.style.display = 'none';
      y.style.filter = 'blur(0)';
    } else {
        x.style.display = 'block';
        y.style.filter = 'blur(4px)';
    }
}
  
function closeHamburger() {
    document.getElementById('myLinks').style.display = 'none';
}

/* method to close modal by clicking on background */
document.querySelector('#myLinks').addEventListener('click', function(event) {
    if(event.target === this) {
        console.log('keyUP działa!!!');
        closeHamburger();
    }
});

/* method to close modal by hiting ESC key */
document.addEventListener('keyup', function(event) {
    if(event.keyCode === 27) {
        console.log('keyUP działa!!!');
        closeHamburger();
    }
});

document.querySelector('#myLinks').addEventListener('hashchange', function(event){
   if(window.location.hash == 'http://localhost:3000/#/main'){
        closeHamburger();
        console.log('działa jak powinno bracie! :)');
   } 
});
