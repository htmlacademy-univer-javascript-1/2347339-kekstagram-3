import { getLastArrElem } from '../utils.js';

const effectsElems = document.querySelectorAll('.effects__preview');
const imgPreview = document.querySelector('.img-upload__preview');
//const DEFAULT_PREVIEW_EFFECT = 'effects__preview--none';

//const effectsArray = Array.from(effectsElems);
//const effectsListeners = Object.fromEntries(effectsArray)


const onPreviewEffectClick = (elem) => () => {
  const previewClassList = imgPreview.classList;
  previewClassList.remove(getLastArrElem(previewClassList));
  previewClassList.add(getLastArrElem(elem.classList));
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
  // addEffect(DEFAULT_PREVIEW_EFFECT);
};

export {addEffectsListeners, removeEffectsListeners};
