/* eslint-disable no-alert */

import './text-validators.js';
import { isEscKey, clearElemValue } from '../utils.js';
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
const DEFAULT_PIC_PATH = 'img/upload-default-image.jpg';
const imgRp = new RegExp(`\\.(${IMG_EXTENSIONS.join('|')})*$`);
const uploadFileInputElem = document.querySelector('#upload-file');
const imgEditorElem = document.querySelector('.img-upload__overlay');
const imgEditorCloseElem = document.querySelector('#upload-cancel');
const prewiewElem = imgEditorElem.querySelector('.img-upload__preview img');

const onEscKeydown = (evt) => {
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
  //uploadFileInputElem.value = evt.target.result;
}; //remove

const addImgLoadedListener = () => {
  const fReader = new FileReader();// here?
  fReader.readAsDataURL(uploadFileInputElem.files[0]); // here?
  fReader.addEventListener('loadend', onImgInputLoaded);
};

function openImgEditor() {
  imgEditorElem.classList.remove('hidden');
  document.body.classList.add('modal-open');
  uploadFileInputElem.setAttribute('disabled', '');

  //prewiewElem.src = uploadFileInputElem.value;

  addImgLoadedListener();
  addEditorCloseListeners();
  addImgScaleListeners();
  addEffectsListener();
  //addImgLoadedListener();
}

function closeImgEditor() {
  imgEditorElem.classList.add('hidden');
  document.body.removeAttribute('class');
  uploadFileInputElem.removeAttribute('disabled');

  prewiewElem.src = DEFAULT_PIC_PATH;

  removeEditorCloseListeners();
  removeImgScaleListeners();
  removeEffectsListener();

  clearElemValue(uploadFileInputElem);
  resetPreviewScale();
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
