/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { drawPhotos } from './photos-loading.js';
import './img-editor/img-editor.js';
import { loadPhotos } from './api.js';
import { showAlert } from './utils.js';

loadPhotos(drawPhotos, showAlert);
//https://learn.javascript.ru/position
