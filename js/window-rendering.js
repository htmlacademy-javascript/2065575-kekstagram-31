import {isEscapeKey, isEnterKey} from './util.js';
import {commentLoading, commentList} from './comment-loading.js';

//const picture = document.querySelectorAll('.picture');
const pictures = document.querySelector('.big-picture');
const body = document.querySelector('body');
const buttonImages = document.querySelector('#picture-cancel');
const nowComment = document.querySelector('.comments-loader');

//const comments = pictures.querySelector('.social__comments');
//
//export function openUserImages () {
//  const socialComment = document.querySelector('.social__comment-count');
//  const nowComment = document.querySelector('.comments-loader');
//  const picturesImages = pictures.querySelector('img');
//  const likes = pictures.querySelector('.likes-count');
//  const photoTitle = pictures.querySelector('p');
//
//  picture.forEach(el => el.addEventListener('click', () => {
//    pictures.classList.toggle('hidden');
//    socialComment.classList.add('hidden');
//    nowComment.classList.add('hidden');
//    picturesImages.src = el.querySelector('img').getAttribute('src');
//    likes.textContent = el.querySelector('.picture__likes').textContent;
//    photoTitle.textContent = el.querySelector('img').alt;
//    comments.textContent = el.querySelector('p').textContent;
//    body.classList.add('modal-open');
//  }));
//};


//let commentField = document.querySelector('.social__text');

export const renderBigImage = (item) => {
  const picturesImages = pictures.querySelector('img');
  const photoTitle = document.querySelector('.social__caption')
  const likesImages = pictures.querySelector('.likes-count')
  const commentsNumberMin = document.querySelector('.social__comment-shown-count');
  const commentsNumberMax = document.querySelector('.social__comment-total-count');

  picturesImages.src = item.url;
  photoTitle.textContent = item.description;
  commentsNumberMax.textContent = item.comments.length
  commentsNumberMin.textContent = item.comments.length
  likesImages.textContent = item.likes

  commentLoading(item);
}

export const openBigImage = () => {
  pictures.classList.toggle('hidden');
  //socialComment.classList.add('hidden');
  nowComment.classList.add('hidden');
  body.classList.add('modal-open');
}

const onDocumentKeydown = (evt) => {
  if (isEnterKey (evt)) {
    evt.preventDefault();
  };
};

buttonImages.addEventListener('click', () => {
  pictures.classList.toggle('hidden');
  body.classList.remove('modal-open');
  commentList.innerHTML = "";
  document.removeEventListener('keydown', onDocumentKeydown);
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey (evt)) {
    evt.preventDefault();
    pictures.classList.add('hidden');
    body.classList.remove('modal-open');
    commentList.innerHTML = "";

    document.removeEventListener('keydown', onDocumentKeydown);
  };
});
