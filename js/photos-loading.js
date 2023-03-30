import {getPhoto} from './data.js';
import {createIdGenerator} from './utils.js';

const generatePhotos = () => {
  const photoElemTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const photosContainer = document.querySelector('.pictures');
  const photosFragment = document.createDocumentFragment();
  const generatePhotoId = createIdGenerator(1);
  const photos = Array.from({length: 25}, () => getPhoto(generatePhotoId()));

  photos.forEach( ({url, likes, comments}) => {
    const photoElem = photoElemTemplate.cloneNode(true);
    photoElem.querySelector('.picture__img').src = url;
    photoElem.querySelector('.picture__comments').textContent = comments;
    photoElem.querySelector('.picture__likes').textContent = likes;
    photosFragment.append(photoElem);
  });
  photosContainer.append(photosFragment);
};

export {generatePhotos};
