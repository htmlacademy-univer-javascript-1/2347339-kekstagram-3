const IMG_EXTENSIONS = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'bmp',
  'svg',
  'webp',
  'ico',
];
const imgRp = new RegExp(`\\.(${IMG_EXTENSIONS.join('|')})*$`);
const uploadFileInput = document.querySelector('#upload-file');

const checkImgExtension = () => {
  uploadFileInput.change = () => {
    if (!imgRp.test(uploadFileInput.value)) {
      alert('Невозможно загрузить файл, т.к. это не картинка');
    }
  };
};

export {checkImgExtension};

