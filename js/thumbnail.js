import {createWizards} from './data.js';
import {renderBigImage, openBigImage} from './window-rendering.js';
import {creatingCommentList} from './comment-loading.js';

const commentList = document.querySelector('.social__comments');

const pictureList = document.querySelector('.pictures');
const picture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

export const generatedImages = createWizards;
const createFragment = document.createDocumentFragment();


generatedImages.forEach(({ url, description, comments, likes }) => {
  const pictureElement = picture.cloneNode(true);
  pictureList.appendChild(pictureElement);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  pictureElement.addEventListener('click', () => {
    commentList.innerHTML = "";
    renderBigImage({ url, description, comments, likes});
    openBigImage();
    creatingCommentList({ comments });
  })
  createFragment.appendChild(pictureElement);
});

pictureList.appendChild(createFragment);
