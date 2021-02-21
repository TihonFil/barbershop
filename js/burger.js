const button = document.querySelector('.header-burger__btn');
const nav = document.querySelector('.header__nav');

const burgerBtn = function () {
   button.addEventListener('click', function () {
      nav.classList.toggle('header__nav-active');
   });
}

burgerBtn();