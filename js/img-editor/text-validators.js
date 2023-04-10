import { clearElemValue } from '../utils.js';

const imgFormElem = document.querySelector('.img-upload__form');
const hashtagElem = document.querySelector('.text__hashtags');
const descriptionElem = document.querySelector('.text__description');
const pristine = new Pristine(imgFormElem, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__form--invalid',
  successClass: 'img-upload__from--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__form__error',
});

const resetTextValidators = () => {
  pristine.reset();
};

const clearTextInputs = () => {
  clearElemValue(hashtagElem);
  clearElemValue(descriptionElem);
};

imgFormElem.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

export {resetTextValidators, clearTextInputs};
