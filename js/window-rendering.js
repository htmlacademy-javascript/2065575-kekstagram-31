import {isEscapeKey, isEnterKey} from './util.js';
import {initialRenderComments, clearComments } from './comment-loading.js';

const pictures = document.querySelector('.big-picture');
const body = document.querySelector('body');
const buttonImages = document.querySelector('#picture-cancel');

export const renderBigImage = (item) => {
  const picturesImages = pictures.querySelector('img');
  const photoTitle = document.querySelector('.social__caption')
  const likesImages = pictures.querySelector('.likes-count')
  const commentsNumberMin = document.querySelector('.social__comment-shown-count');
  const commentsNumberMax = document.querySelector('.social__comment-total-count');

  picturesImages.src = item.url;
  photoTitle.textContent = item.description;
  commentsNumberMin.textContent = item.comments.length
  commentsNumberMax.textContent = item.comments.length
  likesImages.textContent = item.likes;

  initialRenderComments(item.comments);
}

export const openBigImage = () => {
  pictures.classList.toggle('hidden');
  body.classList.add('modal-open');
  clearComments()
}

const onDocumentKeydown = (evt) => {
  if (isEnterKey (evt)) {
    evt.preventDefault();
  };
};

buttonImages.addEventListener('click', () => {
  pictures.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey (evt)) {
    evt.preventDefault();
    pictures.classList.add('hidden');
    body.classList.remove('modal-open');
  };
});
