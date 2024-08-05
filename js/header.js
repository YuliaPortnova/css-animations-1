const menu = document.querySelector('.menu');
const burgerButton = menu.querySelector('.menu__burger');

const onBurgerButtonClick = () => {
  menu.classList.toggle('menu--open');

  if (menu.classList.contains('menu--open')) {
    document.body.setAttribute('style', 'overflow: hidden');
  } else {
    document.body.removeAttribute('style');
  }
}

burgerButton.addEventListener('click', onBurgerButtonClick);