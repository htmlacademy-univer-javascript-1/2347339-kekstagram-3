import { imgPreviewElem } from './img-editor.js';

const MAX_SCALE = 100, MIN_SCALE = 25, SCALE_STEP = 25;
const incrImgScaleElem = document.querySelector('.scale__control--bigger');
const redImgScaleElem = document.querySelector('.scale__control--smaller');
const imgScaleElem = document.querySelector('.scale__control--value');
//const imgPreviewElem = document.querySelector('.img-upload__preview');

const getScaleChanger = (op) => () => {
  let scaleValue = parseInt(imgScaleElem.value, 10);
  const isLegalToChange = op === -1 ? scaleValue > MIN_SCALE : scaleValue < MAX_SCALE;
  if (isLegalToChange) {
    scaleValue += SCALE_STEP * op;
    imgScaleElem.value = `${scaleValue}%`;
    imgPreviewElem.style.scale = scaleValue / 100;
  }
};

const cbMap = {
  'onScaleIncreaseClick': getScaleChanger(1),
  'onScaleReduceClick': getScaleChanger(-1)
};

const addImgScaleListeners = () => {
  incrImgScaleElem.addEventListener('click', cbMap.onScaleIncreaseClick);
  redImgScaleElem.addEventListener('click', cbMap.onScaleReduceClick);
};

const removeImgScaleListeners = () => {
  incrImgScaleElem.removeEventListener('click', cbMap.onScaleIncreaseClick);
  redImgScaleElem.removeEventListener('click', cbMap.onScaleReduceClick);
};

const resetPreviewScale = () => {
  imgPreviewElem.style.scale = 1;
  imgScaleElem.value = '100%';
};

export {addImgScaleListeners, removeImgScaleListeners, resetPreviewScale};
