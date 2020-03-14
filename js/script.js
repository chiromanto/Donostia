'strict mode';

const nav = document.querySelector('.nav');
const navSpace = document.querySelector('.nav__space');
const menuSpans = document.querySelectorAll('.nav__menu');
const navIcons = document.querySelectorAll('.nav__icon');
const headerInfoMain = document.querySelector('.header__info-main');
const headerInfoSecond = document.querySelector('.header__info-second');
const closingClasses = ['nav__menu--close-first', 'nav__menu--close-second', 'nav__menu--close-third'];
const headerUnderLines = document.querySelectorAll('.content__header');
const currentScroll = window.pageYOffset;
const arrow = document.querySelector('.arrow__nav');
const navItems = document.querySelectorAll('.nav__item');
const navLinks = document.querySelectorAll('.nav__link');

document.addEventListener('DOMContentLoaded', () => {
  nav.classList.add('nav--show-nav');
  headerInfoMain.classList.add('header__info-main--show');
  if (headerInfoSecond) {
    headerInfoSecond.classList.add('header__info-second--show');
  }

  //Draw line under first header
  if (headerUnderLines[0]) {
    headerUnderLines[0].classList.add('content__header--show-line');
  }
});

//Draw lines under other headers
window.addEventListener('scroll', () => {
  headerUnderLines.forEach(header => {
    if (header.offsetTop - window.pageYOffset < 500) {
      header.classList.add('content__header--show-line');
    }
  });

  //Show arrow in bottom-right corner
  if (window.pageYOffset >= 200) {
    arrow.classList.add('arrow__nav--show');
  } else {
    arrow.classList.remove('arrow__nav--show');
  }
});

//Hiding menu when resizing the page to prevent problems during changing screen resolution
window.addEventListener('resize', checkWindowWidth);

function checkWindowWidth() {
  if (window.innerWidth > 800 && navSpace.classList.contains('nav__space--show')) {
    // showMenu();
  }
}

//Show nav menu
nav.addEventListener('click', showMenu);

function showMenu() {
  menuSpans.forEach((span, i) => {
    span.classList.toggle(`${closingClasses[i]}`);
  });
  navIcons.forEach(icon => {
    icon.classList.toggle('nav__icon--show');
  });
  navSpace.classList.toggle('nav__space--show');
}

//Show ItemMenu with tab (Desktop)
navLinks.forEach(showItemMenu);

function showItemMenu(link, i) {
  link.addEventListener('blur', () => {
    navItems[i].classList.remove('nav__item--tab');
  });
  link.addEventListener('focus', () => {
    navItems[i].classList.add('nav__item--tab');
  });

  //For touchable screens with resolution 1280px
  if (window.innerWidth >= 1280) {
    link.addEventListener('touchstart', e => {
      navItems.forEach((item, i) => {
        if (item.classList.contains('nav__item--tab') && e.currentTarget != navLinks[i]) {
          item.classList.remove('nav__item--tab');
        }
      });

      if (!navItems[i].classList.contains('nav__item--tab')) {
        e.preventDefault();
        navItems[i].classList.add('nav__item--tab');
      }
    });
  }
}

//Go back to top of the page
function animateScroll() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -20);
    setTimeout(animateScroll, 10);
  }
}

if (arrow) {
  arrow.addEventListener('click', function() {
    animateScroll();
  });
}
