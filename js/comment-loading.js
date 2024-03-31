import {createCommentObj} from './data.js';
// import {commentList} from './window-rendering.js';

const nowCommentsButton = document.querySelector('.comments-loader');

const socialComments = document.querySelector('.social__comments');
// const socialComment = socialComments.querySelector('.social__comment');
const socialCommentCount = document.querySelector('.social__comment-shown-count');
const socialCommentsLoader = document.querySelector('.social__comments-loader');

// const commentList = document.querySelector('.social__comments');
// const commentItem = commentList.querySelector('.social__comment');

// import {generatedImages} from './thumbnail.js';

// const commentList = document.querySelector('#comment').content;
const commentListClon = document.querySelector('#comment')
  .content
  .querySelector('.social__comment');
// let comments = [];
// let currentComment = 0;
const COMMENTS_NUM = 5;

// const renderComment = createCommentObj();

export const creatingCommentList = () => {
  const fragmentComment = document.createDocumentFragment();
  const commentElement = commentListClon.cloneNode(true);

  commentElement.querySelector('.social__picture').src = createCommentObj().avatar;
  commentElement.querySelector('.social__picture').alt = createCommentObj().name;
  commentElement.querySelector('.social__text').textContent = createCommentObj().message;

  fragmentComment.appendChild(commentElement)


  return fragmentComment;
};

export const commentLoading = (fragmentComment) => {
  let currentCount = 0;
  let comments = [];
  return () => {
    comments = fragmentComment;
    const COUNT_STEP = 5;
    const arrComments = comments.slice(currentCount, currentCount + COUNT_STEP);
    const arrCommentsLength = arrComments.length + currentCount;
    arrComments.forEach((comment) => {
      const commentElement = creatingCommentList(comment);
      dataListFragment.appendChild(commentElement);
    });

    socialComments.appendChild(dataListFragment);
    socialCommentCount.textContent = arrCommentsLength;
    if (arrCommentsLength >= comments.length) {
      socialCommentsLoader.classList.add('hidden');
    }
    currentCount += COUNT_STEP;
  };
};


export const initialRenderComments = (currentComment) => {
  const render = renderComments(currentComment);

  socialCommentsLoader.addEventListener('click', render);
};

export const clearComments = () => {
  socialComments.innerHTML = '';
  socialCommentCount.textContent = 0;
  socialCommentsLoader.classList.remove('hidden');
  socialCommentsLoader.removeEventListener('click', initialRenderComments);
};

// console.log(creatingCommentList())

// export const creatingCommentList  = (comments) => {
//   const newComment = document.createElement('li');
//   newComment.classList.add('social__comment');
//   commentList.append(newComment);

//   const avatarImages = document.createElement('img');
//   avatarImages.classList.add('social__picture');
//   avatarImages.src = comments.avatar;
//   avatarImages.alt = comments.name;
//   newComment.append(avatarImages);

//   const paragraph = document.createElement('p');
//   paragraph.classList.add('social__text');
//   paragraph.textContent = comments.message;
//   newComment.append(paragraph);
// }

// export const commentLoading = (item) => {
//   if (COMMENTS_NUM >= item.length) {
//     for (let i = 0; i < 5; i++) {
//       creatingCommentList()
//     }

//     nowCommentsButton.classList.add('hidden');
//   }
// }
// commentLoading()

//nowCommentsButton.addEventListener('click', () => {
//  nowComment.classList.add('hidden');
//});
