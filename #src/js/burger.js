// burger

let burger = document.querySelector('.burger');
let nav = document.querySelector('.mobile__nav');
let logo = document.querySelector('.hero-logo');
let socials = document.querySelector('.hero-socials');

const openMenu = () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  logo.classList.toggle('active');
  socials.classList.toggle('active');
}

burger.addEventListener('click', openMenu );

// burger end
