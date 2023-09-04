const menuToggleButton = document.querySelector('.header__mob-menu-button');
const menuOpenIcon = document.querySelector('.header__mob-menu-icon-burger');
const menuCloseIcon = document.querySelector('.header__mob-menu-icon-cross');
const menuWrapper = document.querySelector('.header__positioning-wrapper');
const pageWrapper = document.querySelector('.page-wrapper');
const heroWrapper = document.querySelector('.hero__container');
const mainPage = document.querySelector('main');
const menuLinks = Array.from(document.querySelectorAll('.header__menu-item'));

const toggleMenuStyles = () => {
  menuToggleButton.classList.toggle('header__mob-menu-button--mob-open');
  pageWrapper.classList.toggle('page-wrapper--mob-open');
  heroWrapper.classList.toggle('hero__container--mob-open');
  menuWrapper.classList.toggle('header__positioning-wrapper--mob-open');
  menuOpenIcon.classList.toggle('header__mob-menu-icon-burger--closed');
  menuCloseIcon.classList.toggle('header__mob-menu-icon-cross--opened');
  return;
};

const showMenu = () => {
  toggleMenuStyles();
  menuLinks.forEach((link) => {
    link.addEventListener('click', menuLinksHandler);
  });
};

const hideMenu = () => {
  toggleMenuStyles();
  menuLinks.forEach((link) => {
    link.removeEventListener('click', menuLinksHandler);
  });
};

const menuLinksHandler = () => {
  hideMenu();
  return;
};

export const handleMobileMenu = () => {
  menuToggleButton.addEventListener('click', () => {
    if (pageWrapper.classList.contains('page-wrapper--mob-open')) {
      hideMenu();
      mainPage.removeEventListener('click', hideMenu);
    } else {
      showMenu();
      mainPage.addEventListener('click', hideMenu);
    }
  });
};
