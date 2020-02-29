const nav = document.getElementById('nav');
const navSpace = document.querySelector('.nav__space');
const menuSpans = document.querySelectorAll('.nav__menu');
const navIcons = document.querySelectorAll('.nav__icon');
const headerInfoMain = document.querySelector('.header__info-main');
const headerInfoSecond = document.querySelector('.header__info-second');
const closingClasses = ['nav__menu--close-first', 'nav__menu--close-second', 'nav__menu--close-third'];

document.addEventListener('DOMContentLoaded', () => {
  headerInfoMain.classList.add('header__info-main--show');
  headerInfoSecond.classList.add('header__info-second--show');
});

nav.addEventListener('click', () => {
  menuSpans.forEach((span, i) => {
    span.classList.toggle(`${closingClasses[i]}`);
  });
  navIcons.forEach(icon => {
    icon.classList.toggle('nav__icon--show');
  });
  navSpace.classList.toggle('nav__space--show');
});
