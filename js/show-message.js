import { getToCloneElem, isEscKey, getOnAnotherAreaClickListener } from './utils.js';

let btnElem, msgSelector;

const createMsgElem = (templateSelector, innerElemSelector, btnSelector, parentElem) => {
  const toCloneMsgElem = getToCloneElem(templateSelector, innerElemSelector);
  const msgElem = toCloneMsgElem.cloneNode(true);
  msgSelector = innerElemSelector;

  return {
    'show': () => showMsg(parentElem, msgElem, btnSelector),
    'close': () => closeMsg(parentElem, msgElem)
  };
};

function showMsg(elem, msgElem, btnSelector) { // return function
  elem.append(msgElem);
  btnElem = document.querySelector(btnSelector);
  addMsgListeners(btnElem);
}

function closeMsg(msgElem) {
  removeMsgListeners();
  msgElem.remove();
}

function addMsgListeners() {
  document.addEventListener('click', onAnotherAreaClick);
  document.addEventListener('keydown', onEscKeydown);
  //btnElem.addEventListener('click', closeMsg);
}

function removeMsgListeners() {
  document.removeEventListener('click', onAnotherAreaClick);
  document.removeEventListener('keydown', onEscKeydown);
 // btnElem.removeEventListener('click', closeMsg);
}

function onAnotherAreaClick() {
  return getOnAnotherAreaClickListener(msgSelector, closeMsg);
}

function onEscKeydown(evt) {
  if (isEscKey(evt)) {
    closeMsg();
  }
}

export {createMsgElem};
