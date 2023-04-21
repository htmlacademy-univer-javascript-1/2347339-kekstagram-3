/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { drawPhotos } from './photos-loading.js';
import './img-editor/img-editor.js';
import { loadPhotos } from './api.js';

loadPhotos(drawPhotos, alert);
