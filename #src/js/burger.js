// burger

let burger = document.querySelector('.burger');
let nav = document.querySelector('.mobile__nav');

const openMenu = () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
}

burger.addEventListener('click', openMenu );

// burger end
