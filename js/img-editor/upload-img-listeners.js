/* eslint-disable no-alert */

import './text-validators.js';
import { isEscKey } from '../utils.js';
import { addImgScaleListeners, removeImgScaleListeners, resetPreviewScale } from './img-scale.js';
import { addEffectsListener, removeEffectsListener, resetPreviewEffects } from './preview-effects.js';
import { resetTextValidators, clearTextInputs } from './text-validators.js';

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
  addEffectsListener();
}

function closeImgEditor() {
  imgEditorElem.classList.add('hidden');
  document.body.removeAttribute('class');
  uploadFileInputElem.removeAttribute('disabled');
  clearTextInputs(uploadFileInputElem);
  //imgElem.src = DEFAULT IMG

  document.removeEventListener('keydown', onEscKeydown);
  imgEditorCloseElem.removeEventListener('click', closeImgEditor);
  removeImgScaleListeners();
  resetPreviewScale();
  removeEffectsListener();
  resetPreviewEffects();
  resetTextValidators();
  clearTextInputs();
}

uploadFileInputElem.addEventListener('change', () => {
  if (!imgRp.test(uploadFileInputElem.value)) {
    alert('Невозможно загрузить файл, т.к. это не картинка');
  } else {
    openImgEditor();
  }
});
