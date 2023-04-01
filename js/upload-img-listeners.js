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
const uploadFileInput = document.querySelector('#upload-file');
const imgEditor = document.querySelector('.img-upload__overlay');
const imgEditorCloseElem = document.querySelector('#upload-cancel');

const checkImgExtension = () => {
  uploadFileInput.onchange = () => {
    if (!imgRp.test(uploadFileInput.value)) {
      alert('Невозможно загрузить файл, т.к. это не картинка');
    } else {
      openImgEditor();
    }
  };
};

const onEscKeydown = (evt) => {
  if (isEscKey(evt)) {
    closeImgEditor();
  }
};

function openImgEditor() {
  imgEditor.classList.remove('hidden');
  document.body.classList.add('modal-open');
  uploadFileInput.setAttribute('disabled', '');
  addImgEditorClose();
}

function addImgEditorClose() {
  imgEditorCloseElem.addEventListener('click', closeImgEditor);
  document.addEventListener('keydown', onEscKeydown);
}

function closeImgEditor() {
  imgEditor.classList.add('hidden');
  document.body.removeAttribute('class');
  uploadFileInput.removeAttribute('disabled');
  document.removeEventListener('keydown', onEscKeydown);
  imgEditorCloseElem.removeEventListener('click', closeImgEditor);
}

export {checkImgExtension};

