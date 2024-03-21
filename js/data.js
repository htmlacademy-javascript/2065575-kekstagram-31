import {getRandomArrayElement, generatePhoto, generateId, getRandomInteger} from './util.js';
import {MESSAGE, NAMES, DESCIPTION} from './facilities.js';

const SIMILAR_WIZARD_COUNT = 25;

const AVATR_MIN = 1;
const AVATR_MAX = 6;

const LIKES_MIN = 15;
const LIKES_MAX = 200;

const COMMENTS_MIN = 1;
const COMMENTS_MAX = 30;

const createCommentObj = function () {
  const comments = {
    id: generateId(),
    avatar: `img/avatar-${getRandomInteger(AVATR_MIN, AVATR_MAX)}.svg`,
    name: getRandomArrayElement(NAMES),
    message: getRandomArrayElement(MESSAGE),
  };
  return comments;
};

const createWizard = () => ({
  id: generateId(),
  url: `photos/${generatePhoto()}.jpg`,
  description: getRandomArrayElement(DESCIPTION),
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: Array.from({ length: getRandomInteger(COMMENTS_MIN, COMMENTS_MAX) }, createCommentObj),
});

const createWizards = Array.from({length: SIMILAR_WIZARD_COUNT}, createWizard);
export {createWizards};
