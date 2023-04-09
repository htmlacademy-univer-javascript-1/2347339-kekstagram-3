/* eslint-disable no-alert */

import './text-validators.js';  // HERE ??
import { isEscKey } from '../utils.js';
import { addImgScaleListeners, removeImgScaleListeners } from './img-scale.js';
import { addEffectsListeners, removeEffectsListeners } from './preview-effects.js';

const IMG_EXTENSIONS = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'bmp',
  'svg',
  'webp',
  'ico',
];
const imgRp = new RegExp(`\\.(${IMG_EXTENSIONS.join('|')})*$`);
const uploadFileInputElem = document.querySelector('#upload-file');
const imgEditorElem = document.querySelector('.img-upload__overlay');
const imgEditorCloseElem = document.querySelector('#upload-cancel');
//const imgElem = document.querySelector('.img-upload__preview').firstElementChild;

const onEscKeydown = (evt) => {
  if (isEscKey(evt)) {
    closeImgEditor();
  }
};

const onImgEditorCrossClick = closeImgEditor;

function openImgEditor() {
  imgEditorElem.classList.remove('hidden');
  document.body.classList.add('modal-open');
  uploadFileInputElem.setAttribute('disabled', '');
  //imgElem.src = uploadFileInputElem.value;

  imgEditorCloseElem.addEventListener('click', onImgEditorCrossClick);
  document.addEventListener('keydown', onEscKeydown);
  addImgScaleListeners();
  addEffectsListeners();
}

function closeImgEditor() {
  imgEditorElem.classList.add('hidden');
  document.body.removeAttribute('class');
  uploadFileInputElem.removeAttribute('disabled');
  uploadFileInputElem.value = '';
  //imgElem.src = DEFAULT IMG

  document.removeEventListener('keydown', onEscKeydown);
  imgEditorCloseElem.removeEventListener('click', closeImgEditor);
  removeImgScaleListeners();
  removeEffectsListeners();
}

uploadFileInputElem.addEventListener('change', () => {
  if (!imgRp.test(uploadFileInputElem.value)) {
    alert('Невозможно загрузить файл, т.к. это не картинка');
  } else {
    openImgEditor();
  }
});
