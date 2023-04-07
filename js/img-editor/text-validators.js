import { hasLegalLength } from '../utils.js';

const imgFormElem = document.querySelector('.img-upload__form');
const hashTagElem = document.querySelector('.text__hashtags');
const descriptionElem = document.querySelector('.text__description');
const hashTagReg = '/^#[a-zA-Zа-яА-ЯёЁ0-9]{1,17}$/';

const pristine = new Pristine(imgFormElem, {
  classTo: 'img-upload__text',
  errorClass: 'form_item--invalid',
  successClass: 'form_item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__text'
});

const validateHastag = (str) => hashTagReg.test(str);
const validateDescription = (str) => !hasLegalLength(str, 19) && hasLegalLength(str, 120);

pristine.addValidator(hashTagElem, validateHastag,
  'Хештег должен начинаться решеткой и иметь от 1 до 17 символов после!');

pristine.addValidator(descriptionElem, validateDescription,
  'Длина комментария должна быть от 20 до 120 символов!');

imgFormElem.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
