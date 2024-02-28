// Функция Проверка строки
//function stringLength (stringText, maxLength) {
//  if (stringText.replaceAll(' ','').length <= maxLength) {
//    return true;
//  }
//
//  return false;
//}
//
//const finalConclusion = stringLength('проверяемая строка', '20');
//console.log(finalConclusion);
//
//// Функция Палиндром
//function palindromeString (wordPhrase) {
//  const WORD_PHRASE_REVERRS = wordPhrase.split('').reverse().join('');
//  if (wordPhrase.toUpperCase().replaceAll(' ','') === WORD_PHRASE_REVERRS.toUpperCase().replaceAll(' ','')) {
//    return true;
//  }
//
//  return false;
//}
//
//const lineTotal = palindromeString('Лёша на полке клопа нашёл');
//console.log(lineTotal);
//
////Извлечение цифры из строки
//function digitExtraction (digitString, BLANK_LINE) {
//  const DIGIT_STRING = digitString.replaceAll(' ','');
//  for (let i = 0; i <= digitString.length; i++) {
//    if (DIGIT_STRING[i] >= 0 && DIGIT_STRING[i] <= 9) {
//      BLANK_LINE += DIGIT_STRING[i];
//    }
//  }
//  return BLANK_LINE;
//}
//
//const lineTotal1 = digitExtraction('asbnjncfslk 00007', '');
//console.log(parseInt(lineTotal1));
