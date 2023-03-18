import {getRandomIntFromRange, getRandomArrElem} from './utils.js';

const PHOTO_DESCRIPTIONS = ['Моя любимая!', 'Неплохо получилось, правда?', 'Что-то необычное...', 'Как-то так'];

const getPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrElem(PHOTO_DESCRIPTIONS),
  likes: getRandomIntFromRange(15, 200),
  comments: getRandomIntFromRange(0, 200)
});

export {getPhoto};
