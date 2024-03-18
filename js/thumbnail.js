import {createWizards} from './data.js';

const pictureList = document.querySelector('.pictures')
const picture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const generatedImages = createWizards;
const createFragment = document.createDocumentFragment();


generatedImages.forEach(({url, description, comments, likes}) => {
  const pictureElement = picture.cloneNode(true);
  pictureList.appendChild(pictureElement)

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  createFragment.appendChild(pictureElement);
});

pictureList.appendChild(createFragment);
