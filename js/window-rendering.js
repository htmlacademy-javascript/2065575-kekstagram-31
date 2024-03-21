import {isEscapeKey, isEnterKey} from './util.js';

const picture = document.querySelectorAll('.picture');
const pictures = document.querySelector('.big-picture');
const body = document.querySelector('body');
const buttonImages = document.querySelector('#picture-cancel');
const comments = pictures.querySelector('.social__comments');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserImages();
  }
};

function openUserImages () {
  const socialComment = document.querySelector('.social__comment-count');
  const nowComment = document.querySelector('.comments-loader');
  const picturesImages = pictures.querySelector('img');
  const likes = pictures.querySelector('.likes-count');
  const photoTitle = pictures.querySelector('p');
  //const comments = pictures.querySelector('.social__comments');

  picture.forEach(el => el.addEventListener('click', function () {
    pictures.classList.toggle('hidden');
    socialComment.classList.add('hidden');
    nowComment.classList.add('hidden');
    picturesImages.src = el.querySelector('img').getAttribute('src');
    likes.textContent = el.querySelector('.picture__likes').textContent;
    photoTitle.textContent = el.querySelector('img').alt
    comments.textContent = el.querySelector('p').textContent;

    document.addEventListener('keydown', onDocumentKeydown);
  }));
}

function closeUserImages () {
  buttonImages.addEventListener('click', function () {
    pictures.classList.toggle('hidden');

    document.addEventListener('keydown', onDocumentKeydown);
  });
}

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    pictures.classList.add('hidden');
  }
});

body.addEventListener('click', function () {
  body.classList.toggle('modal-open');
});

openUserImages()
closeUserImages()
