const openButton = document.querySelector('.slider__modal-btn');
const modal = document.querySelector('.modal');
const closeButton = modal.querySelector('.modal__close-btn');
const modalContent = modal.querySelector('.modal__wrap');

const animateIn = () => {
  modalContent.classList.remove('modal-in');
  modalContent.removeEventListener('animationend', animateIn);
}

const animateOut = () => {
  modal.classList.remove('modal--open');
  modalContent.classList.remove('modal-out');
  modalContent.removeEventListener('animationend', animateOut);
}

const onOpenButtonClick = () => {
  modalContent.addEventListener('animationend', animateIn);
  modal.classList.add('modal--open');
  modalContent.classList.add('modal-in');
}

const onCloseButtonClick = () => {
  modalContent.addEventListener('animationend', animateOut);
  modalContent.classList.add('modal-out');
}

openButton.addEventListener('click', onOpenButtonClick);
closeButton.addEventListener('click', onCloseButtonClick);