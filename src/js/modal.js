/* eslint-disable indent */

/* function for closingModal */
function closeModal() {
    document.getElementById('overlay').classList.remove('show');
}

/* method to close modal by X */
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal();
    });
  });

/* method to close modal by clicking on background */
document.querySelector('#overlay').addEventListener('click', function(e) {
if(e.target === this) {
    closeModal();
}
});

/* method to close modal by hiting ESC key */
document.addEventListener('keyup', function(e) {
if(e.keyCode === 27) {
    closeModal();
}
});

function openModal(modal) {
document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
});
document.querySelector('#overlay').classList.add('show');
document.querySelector(modal).classList.add('show');
}

const displayModal = document.querySelector('.splash i');
displayModal.addEventListener('click', function(e){
    e.preventDefault();
    openModal('#overlay');
    openModal('#myModal');
});
