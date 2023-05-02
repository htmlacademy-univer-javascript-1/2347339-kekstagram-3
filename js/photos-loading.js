import { getToCloneElem } from './utils.js';

const drawPhotos = (photos) => {
  const photosContainerElem = document.querySelector('.pictures');
  const photosFragmentElem = document.createDocumentFragment();

  photos.forEach((photo) => {
    const photoElem = getPhotoELem(photo);
    photosFragmentElem.append(photoElem);
  });
  photosContainerElem.append(photosFragmentElem);
};

function getPhotoELem(photo) {
  const toClonePhotoElem = getToCloneElem('#picture', '.picture');
  const photoElem = toClonePhotoElem.cloneNode(true);
  photoElem.querySelector('.picture__img').src = photo.url;
  photoElem.querySelector('.picture__comments').textContent = photo.comments;
  photoElem.querySelector('.picture__likes').textContent = photo.likes;
  return photoElem;
}

export {drawPhotos};
