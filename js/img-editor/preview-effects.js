import { getLastArrElem } from '../utils.js';

const imgPreviewElem = document.querySelector('.img-upload__preview');
const effectsListElem = document.querySelector('.effects__list');
const DEFAULT_PREVIEW_EFFECT = 'effects__preview--none';

const onEffectItemClick = (evt) => {
  const targetClasses = evt.target.classList;
  const previewClasses = imgPreviewElem.classList;
  if (targetClasses.contains('effects__preview')) {
    previewClasses.remove(getLastArrElem(previewClasses));
    previewClasses.add(getLastArrElem(targetClasses));
  }
};

const addEffectsListeners = () => {
  effectsListElem.addEventListener('click', onEffectItemClick);
};

const removeEffectsListeners = () => {
  effectsListElem.removeEventListener('click', onEffectItemClick);
  const previewClasses = imgPreviewElem.classList;
  previewClasses.remove(getLastArrElem(previewClasses));
  previewClasses.add(DEFAULT_PREVIEW_EFFECT);
};

export {addEffectsListeners, removeEffectsListeners};
