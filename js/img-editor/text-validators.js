import { clearElemValue, hasLegalLength } from '../utils.js';

const HASHTAG_REG = new RegExp('(^$)|(^#[a-zA-Zа-яА-ЯёЁ0-9]{1,17}$)');
const imgFormElem = document.querySelector('.img-upload__form');
const hashtagElem = document.querySelector('.text__hashtags');
const descriptionElem = document.querySelector('.text__description');
const pristine = new Pristine(imgFormElem, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__form--invalid',
  successClass: 'img-upload__from--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__form__error',
});

const isLegalHashtag = (str) => HASHTAG_REG.test(str);
const isLegalDescription = (str) => !hasLegalLength(str, 19) && hasLegalLength(str, 140);


pristine.addValidator(descriptionElem, isLegalDescription, 'Длина комментария должна быть от 20 до 140 символов');
pristine.addValidator(hashtagElem, isLegalHashtag, 'Хештег должен начинаться с # и иметь от 1 до 17 букв и(или) цифр после');

const resetTextValidators = () => {
  pristine.reset();
};

const clearTextInputs = () => {
  clearElemValue(hashtagElem);
  clearElemValue(descriptionElem);
};

const getHashtagInput = () => hashtagElem.value;
const getDescriptionInput = () => descriptionElem.value;

const setHashtagInput = (text) => {
  hashtagElem.value = text;
};

const setDescriptionInput = (text) => {
  descriptionElem.value = text;
};

export {resetTextValidators, clearTextInputs, getHashtagInput, getDescriptionInput, setHashtagInput, setDescriptionInput, pristine};
