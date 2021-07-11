let i = 0;

function carousel() {
  //const images = [];
  let time = 3000;
  
  //images[0] = 'https://images.pexels.com/photos/2850515/pexels-photo-2850515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  //images[1] = 'https://cdn.pixabay.com/photo/2014/09/01/01/07/aluminium-432524_960_720.jpg';
  //const element = document.getElementById("carousel");
  //element.style.backgroundImage = "url('images[i]')";
  //element.setAttribute.backgroundImage = url(images[0]);
  
  if(i < 1) {
    i++;
    document.getElementById("carousel").style.backgroundImage = "url('https://images.pexels.com/photos/2850515/pexels-photo-2850515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
  } else {
    i = 0;
    document.getElementById("carousel").style.backgroundImage = "url('https://cdn.pixabay.com/photo/2014/09/01/01/07/aluminium-432524_960_720.jpg')";
  }

  setTimeout("carousel()", time);
}

window.onload = carousel();