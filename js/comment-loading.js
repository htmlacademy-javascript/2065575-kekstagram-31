import {createCommentObj} from './data.js';
import {commentList} from './window-rendering.js';

const nowCommentsButton = document.querySelector('.comments-loader');

const COMMENTS_NUM = 5
const creatingCommentList  = () => {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');
  commentList.append(newComment);

  const avatarImages = document.createElement('img');
  avatarImages.classList.add('social__picture');
  avatarImages.src = createCommentObj().avatar;
  avatarImages.alt = createCommentObj().name;
  newComment.append(avatarImages);

  const paragraph = document.createElement('p');
  paragraph.classList.add('social__text');
  paragraph.textContent = createCommentObj().message;
  newComment.append(paragraph);
}

export const commentLoading = (item) => {
  let commentsItem = 0;
  if (COMMENTS_NUM >= item.comments.length) {
    for (let i = 0; i < item.comments.length; i++) {
      creatingCommentList()
    }

    nowCommentsButton.classList.add('hidden');
  }

  if (commentsItem <= item.comments.length-5) {
    commentsItem -= 5
    for (let i = item.comments.length; i > commentsItem; i -= 5) {
      creatingCommentList()
      nowCommentsButton.addEventListener('click', () => {
        creatingCommentList()
      })
    }
    nowCommentsButton.classList.remove('hidden');

    if (item.comments.length < COMMENTS_NUM) {
      nowCommentsButton.addEventListener('click', () => {
        for (let i = 0; i < item.comments.length; i++) {
          creatingCommentList()
          nowCommentsButton.classList.add('hidden');
        }
      })
    }
  }
}

//nowCommentsButton.addEventListener('click', () => {
//  nowComment.classList.add('hidden');
//});
