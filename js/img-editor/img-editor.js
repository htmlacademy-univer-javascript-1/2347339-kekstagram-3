/* eslint-disable no-alert */

import './text-validators.js';
import { isEscKey, clearElemValue } from '../utils.js';
import { addImgScaleListeners, removeImgScaleListeners, resetPreviewScale } from './img-scale.js';
import { addEffectsListener, removeEffectsListener, resetPreviewEffects } from './preview-effects.js';
import { resetTextValidators, clearTextInputs } from './text-validators.js';
import { createEffectSlider, removeEffectSlider } from './effect-slider.js';

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
const DEFAULT_PIC_PATH = 'img/upload-default-image.jpg';
const imgRp = new RegExp(`\\.(${IMG_EXTENSIONS.join('|')})*$`);
const uploadFileInputElem = document.querySelector('#upload-file');
const imgEditorElem = document.querySelector('.img-upload__overlay');
const imgEditorCloseElem = document.querySelector('#upload-cancel');
const prewiewElem = imgEditorElem.querySelector('.img-upload__preview img');
const imgPreviewElem = document.querySelector('.img-upload__preview');
const fReader = new FileReader();

const onEscKeydown = (evt) => { // hastag validator doesn't work when submit with lefal comm
  if (isEscKey(evt)) {
    evt.preventDefault();
    closeImgEditor();
  }
};

const onImgEditorCrossClick = closeImgEditor;

const addEditorCloseListeners = () => {
  imgEditorCloseElem.addEventListener('click', onImgEditorCrossClick);
  document.addEventListener('keydown', onEscKeydown);
};

const removeEditorCloseListeners = () => {
  imgEditorCloseElem.removeEventListener('click', closeImgEditor);
  document.removeEventListener('keydown', onEscKeydown);
};

const onImgInputLoaded = (evt) => {
  prewiewElem.src = evt.target.result;
  openImgEditor();
};

function openImgEditor() {
  imgEditorElem.classList.remove('hidden');
  document.body.classList.add('modal-open');
  uploadFileInputElem.setAttribute('disabled', '');

  addEditorCloseListeners();
  addImgScaleListeners();
  addEffectsListener();

  createEffectSlider();
}

function closeImgEditor() {
  imgEditorElem.classList.add('hidden');
  document.body.removeAttribute('class');
  uploadFileInputElem.removeAttribute('disabled');

  prewiewElem.src = DEFAULT_PIC_PATH;

  removeEditorCloseListeners();
  removeImgScaleListeners();
  removeEffectsListener();
  removeEffectSlider();

  clearElemValue(uploadFileInputElem);
  resetPreviewScale();
  resetPreviewEffects();
  resetTextValidators();
  clearTextInputs();
}

fReader.addEventListener('loadend', onImgInputLoaded);

uploadFileInputElem.addEventListener('change', () => {
  const isImgFile = imgRp.test(uploadFileInputElem.value);
  if (isImgFile) {
    fReader.readAsDataURL(uploadFileInputElem.files[0]);
  } else {
    alert('Невозможно загрузить файл, т.к. это не картинка');
  }
});

export {imgPreviewElem};
