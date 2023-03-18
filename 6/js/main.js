/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import {getPhoto} from './data.js';
import {createIdGenerator, getRandomIntFromRange} from './utils.js';

const generatePhotoId = createIdGenerator(1);
const photos = Array.from({length: 25}, () => getPhoto(generatePhotoId()));
