const hasLegalLength = (string, maxLegalLength) => string.length < maxLegalLength + 1;
const getLastArrElem = (arr) => arr ? arr[arr.length - 1] : null;

const isEscKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

const clearElemValue = (elem) => {
  elem.value = '';
};

const createBtnBlocker = (btnSelector, blockedBtnText, unblockedBtnText) => {
  const btnElem = document.querySelector(btnSelector);
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
    if (evt.target !== document.querySelector(selector)) {
      cb();
    }
  };
  return onAnotherAreaClick;
};

const getOnEscKeydownListener = (cb) => {
  const onEscKeydown = (evt) => {
    if (isEscKey(evt)) {
      cb();
    }
  };
  return onEscKeydown;
};

const getToCloneElem = (templateSelector, innerElemSelector) =>
  document.querySelector(templateSelector).content.querySelector(innerElemSelector);

const showAlert = (message) => {
  const ERR_MSG_DURATION = 5000;  // ms
  const ALERT_CLASS = 'load-data__err';
  const alertElem = document.createElement('div');

  alertElem.classList.add(ALERT_CLASS);
  alertElem.textContent = message;
  document.body.insertBefore(alertElem, document.body.firstChild);

  setTimeout(() => {
    alertElem.remove();
  }, ERR_MSG_DURATION);
};

export {hasLegalLength, isEscKey, isEnterKey, getLastArrElem,
  clearElemValue, getOnAnotherAreaClickListener,  getOnEscKeydownListener, getToCloneElem ,showAlert, createBtnBlocker};
