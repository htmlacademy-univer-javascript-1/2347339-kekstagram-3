const incrImgScaleElem = document.querySelector('.scale__control--bigger');
const redImgScaleElem = document.querySelector('.scale__control--smaller');
const imgScaleElem = document.querySelector('.scale__control--value');
const MAX_SCALE = 100, MIN_SCALE = 0, SCALE_STEP = 25;

const onIncrImgElemClick = () => {
  const scaleValue = parseInt(imgScaleElem.value, 10);
  if (scaleValue < MAX_SCALE) {
    imgScaleElem.value = `${scaleValue + SCALE_STEP}%`;
  }
};

const onRedImgElemClick = () => {
  const scaleValue = parseInt(imgScaleElem.value, 10);
  if (scaleValue > MIN_SCALE) {
    imgScaleElem.value = `${scaleValue - SCALE_STEP}%`;
  }
};

const addImgScaleListeners = () => {
  incrImgScaleElem.addEventListener('click', onIncrImgElemClick);
  redImgScaleElem.addEventListener('click', onRedImgElemClick);
};

const removeImgScaleListeners = () => {
  incrImgScaleElem.removeEventListener('click', onIncrImgElemClick);
  redImgScaleElem.removeEventListener('click', onRedImgElemClick);
};

export {addImgScaleListeners, removeImgScaleListeners};
