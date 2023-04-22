import { createBtnBlocker } from '../utils.js';
import { pristine } from './text-validators.js';
import { sendData } from '../api.js';

const submitBtnElem = document.querySelector('.img-upload__submit');
const submitBtnBlocker = createBtnBlocker(submitBtnElem, 'Отправляю...', 'Отправить');
const imgFormElem = document.querySelector('.img-upload__form');

const addSubmitListener = () => {
  imgFormElem.addEventListener('submit', (evt) => {
    evt.preventDefault();
    new Promise((resolve) => resolve(pristine.validate()))
      .then((isValidForm) => {
        if (!isValidForm) {
          return;
        }
        const body = new FormData(imgFormElem);
        submitBtnBlocker.block();
        sendData(alert, alert, body);
      });
  });
};

export {addSubmitListener};
