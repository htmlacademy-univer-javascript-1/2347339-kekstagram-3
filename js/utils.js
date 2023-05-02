const hasLegalLength = (string, maxLegalLength) => string.length < maxLegalLength + 1;
const getLastArrElem = (arr) => arr ? arr[arr.length - 1] : null;

const isEscKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

const clearElemValue = (elem) => {
  elem.value = '';
};

const createBtnBlocker = (btnElem, blockedBtnText, unblockedBtnText) => {
  const blockBtn = (isBlocked, btnText) => function() {
    btnElem.disabled = isBlocked;
    btnElem.textContent = btnText;
  };
  return {
    'block': blockBtn(true, blockedBtnText),
    'unblock': blockBtn(false, unblockedBtnText)
  };
};

const getOnAnotherAreaClickListener = (selector, cb) => {
  const onAnotherAreaClick = (evt) => {
    if (evt.target === document.querySelector(selector)) {
      cb();
    }
  };

  return onAnotherAreaClick;
};

const getToCloneElem = (templateSelector, innerElemSelector) => 
  document.querySelector(templateSelector).content.querySelector(innerElemSelector);

// const getToCloneElem = (templateSelector, innerElemSelector) => {
//   return document.querySelector(templateSelector).content.querySelector(innerElemSelector);
// }; // set in other modules

const showAlert = (message) => {
  const ERR_MSG_DURATION = 5000;  // ms
  const ALERT_CLASS = 'load-data__err';
  const alertElem = document.createElement('div');

  alertElem.classList.add(ALERT_CLASS);
  alertElem.textContent = message;
  document.body.append(alertElem);

  setTimeout(() => {
    alertElem.remove();
  }, ERR_MSG_DURATION);
};
// add:  createListener() ...
export {hasLegalLength, isEscKey, isEnterKey, getLastArrElem,
  clearElemValue, createBtnBlocker, getOnAnotherAreaClickListener, getToCloneElem ,showAlert};
