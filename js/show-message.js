import { getToCloneElem, getOnAnotherAreaClickListener, getOnEscKeydownListener } from './utils.js';

let msgElem, btnElem, onAnotherAreaClick;
const onEscKeydown = getOnEscKeydownListener(closeMsg);

const createMsgElem = (templateSelector, sectionSelector, parentElem, btnSelector, innerElemSelector) => {
  msgElem = getToCloneElem(templateSelector, sectionSelector).cloneNode(true);
  btnElem = msgElem.querySelector(btnSelector);
  onAnotherAreaClick = getOnAnotherAreaClickListener(innerElemSelector, closeMsg);
  return {
    'show': () => showMsg(parentElem),
    'close': () => closeMsg()
  };
};

function showMsg(parentElem) {
  parentElem.append(msgElem);

  document.addEventListener('keydown', onEscKeydown);
  document.addEventListener('click', onAnotherAreaClick);
  btnElem.addEventListener('click', closeMsg);
}

function closeMsg() {
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onAnotherAreaClick);
  btnElem.removeEventListener('click', closeMsg);

  msgElem.remove();
}
export {createMsgElem};
