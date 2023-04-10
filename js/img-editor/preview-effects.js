import { getLastArrElem } from '../utils.js';

const DEFAULT_PREVIEW_EFFECT = 'effects__preview--none';
const defaultPreviewEffectElem = document.querySelector('#effect-none');
const imgPreviewElem = document.querySelector('.img-upload__preview');
const effectsListElem = document.querySelector('.effects__list');

const onEffectItemClick = (evt) => {
  const targetClasses = evt.target.classList;
  const previewClasses = imgPreviewElem.classList;
  if (targetClasses.contains('effects__preview')) {
    previewClasses.remove(getLastArrElem(previewClasses));
    previewClasses.add(getLastArrElem(targetClasses));
  }
};

const addEffectsListener = () => {
  effectsListElem.addEventListener('click', onEffectItemClick);
};

const removeEffectsListener = () => {
  effectsListElem.removeEventListener('click', onEffectItemClick);
};

const resetPreviewEffects = () => {
  const previewClasses = imgPreviewElem.classList;
  previewClasses.remove(getLastArrElem(previewClasses));
  previewClasses.add(DEFAULT_PREVIEW_EFFECT);
  defaultPreviewEffectElem.checked  = true;
};
export {addEffectsListener, removeEffectsListener, resetPreviewEffects};
