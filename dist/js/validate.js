const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const emailError = document.getElementById('email-error');

const emailRegex = new RegExp("^[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,8}\\.)+[a-zA-Z]{2,6}$", "i");

emailInput.addEventListener('change', (event) => {
  
  let result = emailRegex.test(event.target.value);
  console.log(event.target.value.length);
  if (result == false) {
    emailError.textContent = 'Wprowadź poprawny adres e-mail';
    emailError.style.color = 'red';
    emailInput.style.borderColor = 'red';
  } else {
    if (result == true) {
      emailError.textContent = '';
      emailInput.style.borderColor = 'rgb(133, 133, 133)';
    }
  }
  if (event.target.value.length == 0) {
    emailError.textContent = '';
    emailInput.style.borderColor = 'rgb(133, 133, 133)';
  }
});
