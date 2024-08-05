const sliderBox = document.querySelector('.slider');
const slides = sliderBox.querySelectorAll('.slider__item');
const buttonPrev = sliderBox.querySelector('.slider__btn--prev');
const buttonNext = sliderBox.querySelector('.slider__btn--next');

let counter = 0;
const maxStep = slides.length - 1;
slides[counter].classList.add("slider__item--current");

const checkFirst = () => {
  if (counter === 0) {
    buttonPrev.setAttribute('disabled', 'true');
  } else {
    buttonPrev.removeAttribute('disabled');
  }
}

const checkLast = () => {
  if (counter === maxStep) {
    buttonNext.setAttribute('disabled', 'true');
  } else {
    buttonNext.removeAttribute('disabled');
  }
}

const onButtonPrevClick = () => {
  slides[counter].classList.remove('slider__item--current');

  counter--;
  checkFirst();
  checkLast();

  slides[counter].classList.add('slider__item--current');
  slides[counter].removeAttribute('style');
};

const onButtonNextClick = () => {
  slides[counter].classList.remove('slider__item--current');
  slides[counter].setAttribute('style', 'transform: translate(0px)');

  counter++;
  checkFirst();
  checkLast();
  
  slides[counter].classList.add('slider__item--current');
};

buttonPrev.addEventListener('click', onButtonPrevClick);
buttonNext.addEventListener('click', onButtonNextClick);