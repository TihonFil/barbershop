const button = document.querySelector('.header-burger__btn');
const nav = document.querySelector('.header__nav');
const links = document.querySelectorAll('.header__nav-link');

const body = document.querySelector('body');
const overlay = document.querySelector('.header-burger__overlay');

const burgerBtn = function () {
   button.addEventListener('click', function (e) {
      e.preventDefault();
      body.classList.toggle('lock');
      nav.classList.toggle('header__nav-active');
   });
}
burgerBtn();

const linkClick = function () {
   links.addEventListener('click', function () {
      nav.classList.remove('header__nav-active');
      body.classList.remove('lock');
   });
}
linkClick();

const overlayClick = function () {
   overlay.addEventListener('click', function ()  {
      body.classList.toggle('lock');
      nav.classList.toggle('header__nav-active');
   });
}
overlayClick();