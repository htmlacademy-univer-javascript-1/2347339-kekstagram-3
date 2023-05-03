import { getDescriptionInput, getHashtagInput, setHashtagInput, setDescriptionInput, pristine } from './text-validators.js';
import { sendData } from '../api.js';
import { closeImgEditor } from './img-editor.js';
import { createMsgElem } from '../show-message.js';
import { createBtnBlocker } from '../utils.js';

const submitBtnBlocker = createBtnBlocker('#upload-submit', 'Отправляю...', 'Отправить');
const imgFormElem = document.querySelector('.img-upload__form');

let imgFile;

function onSubmitBtnClick(evt) {
  evt.preventDefault();
  new Promise((resolve) => resolve(pristine.validate()))
    .then((isValidForm) => {
      if (!isValidForm) {
        return;
      }
      submitBtnBlocker.block();
      const body = new FormData(imgFormElem);
      body.append('filename', imgFile);
      sendData(showSuccess, showError, body);    // add block user u
      document.addEventListener('click', onSendingData, true);
    });
}

function showSuccess() {
  defaultActions();
  const successMsgElem = createMsgElem('#success', '.success', document.body, '.success__button', '.success__inner');
  successMsgElem.show();
}

function showError() {
  const hashtag = getHashtagInput();
  const description = getDescriptionInput();
  defaultActions();
  setHashtagInput(hashtag);
  setDescriptionInput(description);       //effects, slider?
  const errorMsgElem = createMsgElem('#error', '.error', document.body, '.error__button', '.error__inner');
  errorMsgElem.show();
}

function defaultActions() {
  submitBtnBlocker.unblock();
  closeImgEditor();
  document.removeEventListener('click', onSendingData, true);
}

function onSendingData(evt) {
  evt.preventDefault();
  evt.stopPropagation();
}

const addSubmitListener = () => {
  imgFormElem.addEventListener('submit', onSubmitBtnClick);
};

const removeSubmitListener = () => {
  imgFormElem.removeEventListener('submit', onSubmitBtnClick);
};

const setFileNameInForm = (file) => {
  imgFile = file;
};

export {addSubmitListener, removeSubmitListener, setFileNameInForm};
