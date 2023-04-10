const SLIDER_EFECT_SETTINGS = {
  'chrome': {
    min: 0,
    max: 1,
    step: 0.1,
    size: '',
    filter: 'graysacle'
  },
  'sepia': {
    min: 0,
    max: 1,
    step: 0.1,
    size: '',
    filter: 'sepia'
  },
  'marvin': {
    min: 0,
    max: 100,
    step: 1,
    size: '%',
    filter: 'invert'
  },
  'phobos': {
    min: 0,
    max: 3,
    step: 0.1,
    size: 'px',
    filter: 'blur'
  },
  'heat': {
    min: 1,
    max: 3,
    step: 0.1,
    size: '',
    filter: 'brightness'
  }};

const effectValueELem = document.querySelector('.effect-level__value');
const sliderElem = document.querySelector('.effect-level__slider');
const effectValueFieldsetElem = document.querySelector('.img-upload__effect-level');

const createEffectSlider = () => {
  noUiSlider.create(sliderElem, {
    range: {
      min: 0,
      max: 100,
    },
    start: 80,
    step: 1,
    connect: 'lower',
  });
  //effectValueFieldsetElem.setAttribute('hidden', '');
};

const removeEffectSlider = () => {
  sliderElem.noUiSlider.destroy();
};

const changeSliderOptions = () => {

};

export {createEffectSlider, removeEffectSlider, changeSliderOptions};
