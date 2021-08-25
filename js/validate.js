/* eslint-disable indent */
document.querySelector('form').addEventListener('submit', function(event) {
    var isFormValidate = true;
  
    var emailAddressInput = event.target.querySelector('input[name="email_address"]');
    if(emailAddressInput.value.indexOf('@') < 0) {
      isFormValidate = false;
      emailAddressInput.parentElement.querySelector('.error').innerHTML = 'Błędny adres e-mail';
    }
  
    return !isFormValidate ? event.preventDefault() : true;
});