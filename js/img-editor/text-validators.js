const imgFormElem = document.querySelector('.img-upload__form');
const pristine = new Pristine(imgFormElem, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__form--invalid',
  successClass: 'img-upload__from--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__form__error',
});

imgFormElem.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
