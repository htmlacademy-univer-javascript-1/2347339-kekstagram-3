import { isEscKey, getToCloneElem ,getOnAnotherAreaClickListener } from './utils.js';


const successMsgToCloneElem = getToCloneElem('#success', '.success');
let onAnotherAreaClick;

function showSuccessMsg() {
  const successMsgElem = successMsgToCloneElem.cloneNode(true);
  document.body.append(successMsgElem);

  addSuccessMsgListeners();
}

const closeSuccessMsg = () => {
  removeSuccessMsgListeners();

  const successMsgElem = document.querySelector('.success');
  successMsgElem.remove();
};

const onSuccessMsgBtnClick = (evt) => {
  evt.preventDefault();
  closeSuccessMsg();
};

const onEscKeydown = (evt) => {
  if (isEscKey(evt)) {
    closeSuccessMsg();
  }
};

function addSuccessMsgListeners() {
  const successMsgBtnElem = document.querySelector('.success__button');
  onAnotherAreaClick = getOnAnotherAreaClickListener('.success', closeSuccessMsg);

  document.addEventListener('click', onAnotherAreaClick);
  document.addEventListener('keydown', onEscKeydown);
  successMsgBtnElem.addEventListener('click', onSuccessMsgBtnClick);
}

function removeSuccessMsgListeners() {
  const successMsgBtnElem = document.querySelector('.success__button');
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onAnotherAreaClick);
  successMsgBtnElem.removeEventListener('click', onSuccessMsgBtnClick);
}

export {showSuccessMsg, closeSuccessMsg};
