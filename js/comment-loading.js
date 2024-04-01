const socialComments = document.querySelector('.social__comments');
const socialCommentCount = document.querySelector('.social__comment-shown-count');
const socialCommentsLoader = document.querySelector('.social__comments-loader');

const commentListClon = document.querySelector('#comment')
  .content
  .querySelector('.social__comment');

let hendleRender;

const fragmentComment = document.createDocumentFragment();

export const creatingCommentList = (item) => {
  const commentElement = commentListClon.cloneNode(true);

  commentElement.querySelector('.social__picture').src = item.avatar;
  commentElement.querySelector('.social__picture').alt = item.name;
  commentElement.querySelector('.social__text').textContent = item.message;

  return commentElement;
};

export const commentLoading = (currentComment) => {
  let currentCount = 0;
  let comments = [];
  return () => {
    comments = currentComment;
    const COUNT_STEP = 5;
    const arrComments = comments.slice(currentCount, currentCount + COUNT_STEP);
    const arrCommentsLength = arrComments.length + currentCount;
    arrComments.forEach((comment) => {
      const commentElement = creatingCommentList(comment);
      fragmentComment.appendChild(commentElement);
    });

    socialComments.appendChild(fragmentComment);
    socialCommentCount.textContent = arrCommentsLength;

    if (arrCommentsLength >= comments.length) {
      socialCommentsLoader.classList.add('hidden');
    }
    currentCount += COUNT_STEP;
  };
};

export const initialRenderComments = (currentComment) => {
  hendleRender = commentLoading(currentComment);

  socialCommentsLoader.addEventListener('click', hendleRender);
};

export const clearComments = () => {
  socialComments.innerHTML = '';
  socialCommentCount.textContent = 0;
  socialCommentsLoader.classList.remove('hidden');
  socialCommentsLoader.removeEventListener('click', hendleRender());
};
