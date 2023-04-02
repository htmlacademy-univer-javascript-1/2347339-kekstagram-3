import { getLastArrElem } from './utils.js';

const effectsElems = document.querySelectorAll('.effects__preview');
const imgPreview = document.querySelector('.img-upload__preview');
const DEFAULT_PREVIEW_EFFECT = 'effects__preview--none';

const onPreviewEffectClick = (elem) => {
  const effectElem = elem;
  return () => {
    const previewClassList = imgPreview.classList;
    previewClassList.remove(getLastArrElem(previewClassList));
    previewClassList.add(getLastArrElem(effectElem.classList));
  };
};

const addEffectsListeners = () => {
  effectsElems.forEach((effectElem) => {
    effectElem.addEventListener('click', onPreviewEffectClick(effectElem));
  });
};

const removeEffectsListeners = () => {
  effectsElems.forEach((effectElem) => {
    effectElem.removeEventListener('click', onPreviewEffectClick(effectElem));
  });
  const previewClassList = imgPreview.classList;
  previewClassList.remove(getLastArrElem(previewClassList));
  previewClassList.add(DEFAULT_PREVIEW_EFFECT);
};

export {addEffectsListeners, removeEffectsListeners};
