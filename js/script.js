const nav = document.getElementById('nav');
const navSpace = document.querySelector('.nav__space');
const menuSpans = document.querySelectorAll('.nav__menu');
const navIcons = document.querySelectorAll('.nav__icon');
const headerInfoMain = document.querySelector('.header__info-main');
const headerInfoSecond = document.querySelector('.header__info-second');
const closingClasses = ['nav__menu--close-first', 'nav__menu--close-second', 'nav__menu--close-third'];
const headerUnderLines = document.querySelectorAll('.content__header');
const currentScroll = window.pageYOffset;

document.addEventListener('DOMContentLoaded', () => {
  headerInfoMain.classList.add('header__info-main--show');
  if (headerInfoSecond) {
    headerInfoSecond.classList.add('header__info-second--show');
  }

  //Drawing line under first header
  if (headerUnderLines[0]) {
    headerUnderLines[0].classList.add('content__header--show-line');
  }
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

//Drawing lines under other headers
window.addEventListener('scroll', () => {
  headerUnderLines.forEach(header => {
    if (header.offsetTop - window.pageYOffset < 400) {
      header.classList.add('content__header--show-line');
      console.log('działa');
    }
  });
});
