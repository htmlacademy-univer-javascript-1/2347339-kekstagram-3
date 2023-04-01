import {getPhoto} from './data.js';
import {createIdGenerator} from './utils.js';

const generatePhotos = () => {
  const photoTemplateElem = document.querySelector('#picture').content.querySelector('.picture');
  const photosContainerElem = document.querySelector('.pictures');
  const photosFragmentElem = document.createDocumentFragment();
  const generatePhotoId = createIdGenerator(1);
  const photos = Array.from({length: 25}, () => getPhoto(generatePhotoId()));

  photos.forEach( ({url, likes, comments}) => {
    const photoElem = photoTemplateElem.cloneNode(true);
    photoElem.querySelector('.picture__img').src = url;
    photoElem.querySelector('.picture__comments').textContent = comments;
    photoElem.querySelector('.picture__likes').textContent = likes;
    photosFragmentElem.append(photoElem);
  });
  photosContainerElem.append(photosFragmentElem);
};

export {generatePhotos};
