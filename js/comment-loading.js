import {createCommentObj} from './data.js';

export const commentList = document.querySelector('.social__comments');
commentList.innerHTML = "";

export const commentLoading = (item) => {
  if (item.comments.length) {
    for (let i = 0; i < item.comments.length; i++) {
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
  }
}
