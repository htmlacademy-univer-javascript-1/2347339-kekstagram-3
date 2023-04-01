/* eslint-disable no-alert */

import { isEscKey } from './utils.js';

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
const imgRp = new RegExp(`\\.(${IMG_EXTENSIONS.join('|')})*$`);   // rename to Element
const uploadFileInputElem = document.querySelector('#upload-file');
const imgEditorElem = document.querySelector('.img-upload__overlay');
const imgEditorCloseElem = document.querySelector('#upload-cancel');

const onEscKeydown = (evt) => {
  if (isEscKey(evt)) {
    closeImgEditor();
  }
};

const onImgEditorCrossClick = closeImgEditor;

function closeImgEditor() {
  imgEditorElem.classList.add('hidden');
  document.body.removeAttribute('class');
  uploadFileInputElem.removeAttribute('disabled');
  uploadFileInputElem.value = '';

  document.removeEventListener('keydown', onEscKeydown);
  imgEditorCloseElem.removeEventListener('click', closeImgEditor);
}

function openImgEditor() {
  imgEditorElem.classList.remove('hidden');
  document.body.classList.add('modal-open');
  uploadFileInputElem.setAttribute('disabled', '');

  imgEditorCloseElem.addEventListener('click', onImgEditorCrossClick);
  document.addEventListener('keydown', onEscKeydown);
}

uploadFileInputElem.onchange = () => {
  if (!imgRp.test(uploadFileInputElem.value)) {
    alert('Невозможно загрузить файл, т.к. это не картинка');
  } else {
    openImgEditor();
  }
};
