const incrImgScaleElem = document.querySelector('.scale__control--bigger');
const redImgScaleElem = document.querySelector('.scale__control--smaller');
const imgScaleElem = document.querySelector('.scale__control--value');
const imgPreviewElem = document.querySelector('.img-upload__preview');
const MAX_SCALE = 100, MIN_SCALE = 25, SCALE_STEP = 25;

const getScaleChanger = (op) => () => {
  let scaleValue = parseInt(imgScaleElem.value, 10);
  const isLegalToChange = op === -1 ? scaleValue > MIN_SCALE : scaleValue < MAX_SCALE;
  if (isLegalToChange) {
    scaleValue += SCALE_STEP * op;
    imgScaleElem.value = `${scaleValue}%`;
    imgPreviewElem.style.scale = scaleValue / 100;
  }
};

const cb = {
  'onScaleIncreaseClick': getScaleChanger(1),
  'onScaleReduceClick': getScaleChanger(-1)
};

const addImgScaleListeners = () => {
  incrImgScaleElem.addEventListener('click', cb.onScaleIncreaseClick);
  redImgScaleElem.addEventListener('click', cb.onScaleReduceClick);
};

const removeImgScaleListeners = () => {
  incrImgScaleElem.removeEventListener('click', cb.onScaleIncreaseClick);
  redImgScaleElem.removeEventListener('click', cb.onScaleReduceClick);
  imgPreviewElem.style.scale = 1;
  imgScaleElem.value = '100%';
};

export {addImgScaleListeners, removeImgScaleListeners};
