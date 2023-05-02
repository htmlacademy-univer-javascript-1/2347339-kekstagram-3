import { createBtnBlocker, showAlert } from '../utils.js';
//import { pristine } from './text-validators.js';
//import { sendData } from '../api.js';
import { closeImgEditor } from './img-editor.js';
import { createMsgElem } from '../show-message.js';

const submitBtnElem = document.querySelector('.img-upload__submit');
const submitBtnBlocker = createBtnBlocker(submitBtnElem, 'Отправляю...', 'Отправить');
const imgFormElem = document.querySelector('.img-upload__form');
const successMsgElem = createMsgElem('#success', '.success', 'success__button', document.body);

let imgFile;

const onSubmitBtnClick = (evt) => {
  evt.preventDefault();
  closeImgEditor();
  successMsgElem.show();
};
  // new Promise((resolve) => resolve(pristine.validate()))
  //   .then((isValidForm) => {
  //     if (!isValidForm) {
  //       return;
  //     }
  //     const body = new FormData(imgFormElem);
  //     body.append(imgFile);
  //     showSuccessMsg();
//   //     // addSuccessMsgListeners();
//     });
// };

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
