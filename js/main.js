const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Александр',
  'Виктория',
  'Дмитрий',
  'Екатерина',
  'Иван',
  'Жанна',
  'Константин',
  'Лариса',
  'Михаил',
  'Наталья',
  'Олег',
  'Полина',
  'Роман',
  'Светлана',
  'Тимур',
  'Ульяна',
  'Владимир',
  'Яна',
  'Григорий',
  'Зоя',
];
const DESCIPTION = [
  'Прекрасный день для прогулки!',
  'Взгляни на эту красоту природы!',
  'Очаровательный закат',
  'Это место - настоящий рай на земле!',
  'Какая атмосфера!',
  'Вот это вид! Потрясающе!',
  'Как же здесь тихо и спокойно...',
  'Ощущение, будто находишься в сказке!',
  'Лучшее место для отдыха и медитации.',
  'Подарок для глаз и души!',
  'Мечтаю вернуться сюда снова и снова.',
  'Природа вдохновляет на великие дела.',
  'Такой момент стоит запомнить навсегда.',
  'Идеальное место для романтического ужина.',
  'Как прекрасен этот мир!',
  'Моменты счастья на каждом шагу.',
  'Подарок от природы.',
  'Это место наполнено энергией и покоем.',
  'Как же здесь красиво!',
  'Давайте насладимся этой красотой вместе!',
  'Великолепная атмосфера для творчества.',
  'Этот вид заставляет забыть обо всём на свете.',
  'Лучший способ провести выходные!',
  'Природа - лучший художник.',
  'Только в природе можно найти настоящее счастье.',
  'Моменты, которые останутся в сердце навсегда.',
  'Здесь каждая деталь словно сказка.',
  'Невероятно красиво и живописно!',
  'Природа вдохновляет на великие мысли.',
  'Счастье - это просто находиться здесь и сейчас.'
];

//Генерация лайков
function generateLikes() {
  const newLikes = [];
  for (let i = 15; i <= 200; i++) {
    newLikes.push(i);
  }
  return newLikes;
}

const MYLIKES = generateLikes();

//Генерация avatar
function generateAvatar() {
  const newAatar = [];
  for (let i = 1; i <= 6; i++) {
    newAatar.push(i);
  }
  return newAatar;
}

const NEWAVATAR = generateAvatar();

//Генерация Комментариев
function generateComments() {
  const newComments = [];
  for (let i = 1; i <= 30; i++) {
    newComments.push(i);
  }
  return newComments;
}

const NEWCOMMENTS = generateComments();

//Генерация чисел
const SIMILAR_WIZARD_COUNT = 25;

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//Генерация разных чисел
function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generatePhoto = createRandomIdFromRangeGenerator(1, 25);

//функцию-генератор для получения уникальных идентификаторов
function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generateId = createIdGenerator();

//Генерация списока комментариев
const commentListGeneration = function () {
  const comments = [];
  for (let i = 1; i <= getRandomArrayElement(NEWCOMMENTS); i++) {
    const id = i;
    const avatar = 'img/avatar-' + getRandomArrayElement(NEWAVATAR) + '.svg';
    const name = getRandomArrayElement(NAMES);
    const message = getRandomArrayElement(MESSAGE);
    comments.push({
      id,
      avatar,
      message,
      name
    });
  }
  return comments;
};

//Объект
const createWizard = () => ({
  id: generateId(),
  url: 'photos/' + generatePhoto() + '.jpg',
  description: getRandomArrayElement(DESCIPTION),
  likes: getRandomArrayElement(MYLIKES),
  comments: commentListGeneration(),
});

const similarWizards = Array.from({length: SIMILAR_WIZARD_COUNT}, createWizard);
console.log(similarWizards);
