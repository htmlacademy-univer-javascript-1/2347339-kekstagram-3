import { imgPreviewElem } from './img-editor.js';

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

const DEFAULT_EFFECT_NAME = 'none';
const effectValueELem = document.querySelector('.effect-level__value');
const sliderElem = document.querySelector('.effect-level__slider');
const effectValueFieldsetElem = document.querySelector('.img-upload__effect-level');

const createEffectSlider = () => { // hastag validator doesn't work when comm is ok & submit
  noUiSlider.create(sliderElem, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower'
  });
  effectValueFieldsetElem.setAttribute('hidden', '');
};

const removeFilter = () => {
  imgPreviewElem.style.removeProperty('filter');
};

const removeEffectSlider = () => {
  sliderElem.noUiSlider.destroy();
  removeFilter();
};

const changeSliderOptions = (effect) => {
  if (effect === DEFAULT_EFFECT_NAME) {
    effectValueFieldsetElem.setAttribute('hidden', '');
    sliderElem.noUiSlider.off();
    removeFilter();
    return;
  }

  effectValueFieldsetElem.removeAttribute('hidden');
  const settings = SLIDER_EFECT_SETTINGS[effect];
  sliderElem.noUiSlider.updateOptions({
    range: {
      min: settings.min,
      max: settings.max,
    },
    start: settings.max,
    step: settings.step
  });
  sliderElem.noUiSlider.off();
  sliderElem.noUiSlider.on('update', () => {
    const effectValue = sliderElem.noUiSlider.get();
    effectValueELem.value = effectValue;
    imgPreviewElem.style.filter = `${settings.filter}(${effectValue + settings.size})`;
  });
};

export {createEffectSlider, removeEffectSlider, changeSliderOptions};
