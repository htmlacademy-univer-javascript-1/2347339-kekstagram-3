import { getDescriptionInput, getHashtagInput, setHashtagInput, setDescriptionInput, pristine } from './text-validators.js';
import { sendData } from '../api.js';
import { closeImgEditor } from './img-editor.js';
import { createMsgElem } from '../show-message.js';
import { createBtnBlocker } from '../utils.js';

const submitBtnBlocker = createBtnBlocker('#upload-submit', 'Отправляю...', 'Отправить');
const imgFormElem = document.querySelector('.img-upload__form');

let imgFile;

const onSubmitBtnClick = (evt) => {
  evt.preventDefault();
  new Promise((resolve) => resolve(pristine.validate()))
    .then((isValidForm) => {
      if (!isValidForm) {
        return;
      }
      submitBtnBlocker.block();
      const body = new FormData(imgFormElem);
      body.append('filename', imgFile);
      sendData(showSuccess, showError, body);
    })
    .then(() => {
    });
};

function showSuccess() {
  submitBtnBlocker.unblock();
  const successMsgElem = createMsgElem('#success', '.success', document.body, '.success__button', '.success__inner');
  closeImgEditor();
  successMsgElem.show();
}

function showError() {
  submitBtnBlocker.unblock();
  const errorMsgElem = createMsgElem('#error', '.error', document.body, '.error__button', '.error__inner');
  const hashtag = getHashtagInput();
  const description = getDescriptionInput();
  closeImgEditor();
  errorMsgElem.show();
  setHashtagInput(hashtag);
  setDescriptionInput(description);       //effects, slider?
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
