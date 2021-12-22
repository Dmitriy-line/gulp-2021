"use strict";

function modal(btn, popup) {
  var closePopup = document.querySelectorAll('.popup-close');
  btn = btn;
  popup = popup;
  btn.addEventListener('click', function () {
    popup.classList.add('open');
    document.body.style.overflow = "hidden";
  });
  closePopup.forEach(function (item) {
    item.addEventListener('click', closeModal);
  });
  window.addEventListener('click', function (event) {
    if (event.target === popup) {
      closeModal();
    }
  });

  function closeModal() {
    popup.classList.remove('open');
    document.body.style.overflow = "";
  }
}

var formCallBtn = document.querySelector('.popup-privacy__call-btn');
var privacyPopup = document.querySelector('.popup-privacy');
formCallBtn.addEventListener('click', modal(formCallBtn, privacyPopup));