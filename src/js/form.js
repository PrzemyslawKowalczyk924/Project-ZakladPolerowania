const contactForm = document.querySelector('.form-wrapper');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:5000');
    xhr.setRequestHeader('content-type', 'application/json');
    console.log(xhr);
    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success') {
            alert('Email sent');
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        } else {
            alert('Something went wrong!');
        }
    }
    xhr.send(JSON.stringify(formData));
});