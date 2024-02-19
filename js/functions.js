// Функция Проверка строки
function stringLength (stringText, maxLength) {
  if (stringText.replaceAll(' ','').length <= maxLength) {
    return true;
  }

  return false;
};

let stringText = 'проверяемая строка';
let maxLength = "10";

const finalConclusion = stringLength(stringText, maxLength)
console.log(finalConclusion);

// Функция Палиндром
function palindromeString (wordPhrase) {
  if (wordPhrase.toUpperCase().replaceAll(' ','') == WORD_PHRASE_REVERRS.toUpperCase().replaceAll(' ','')) {
    return true;
  }

  return false;
};

let wordPhrase = 'Лёша на полке клопа нашёл';
const WORD_PHRASE_REVERRS = wordPhrase.split("").reverse().join("");

const lineTotal = palindromeString(wordPhrase);
console.log(lineTotal);

//Извлечение цифры из строки
function digitExtraction (DIGIT_STRING, BLANK_LINE) {
  for (let i = 0; i <= digitString.length; i++) {
    if (DIGIT_STRING[i] >= 0 && DIGIT_STRING[i] <= 9) {
      BLANK_LINE += DIGIT_STRING[i]
    }
  }
  return BLANK_LINE
}

const BLANK_LINE = '';
let digitString = '1.5';
const DIGIT_STRING = digitString.replaceAll(' ','')

const lineTotal1 = digitExtraction(DIGIT_STRING, BLANK_LINE);
console.log(parseInt(lineTotal1));
