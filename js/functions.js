const START_OF_THEWORKING_DAY = '08:00';
const END_OF_DEY = '17:30';
const MEETYNG_START = '14:00';
const MEETYNG_DURATION = 90;

const workingTime = function (START_OF_THEWORKING_DAY, END_OF_DEY, MEETYNG_START, MEETYNG_DURATION) {
  let beginningOfTheDay = Number((START_OF_THEWORKING_DAY.split(':')[0].match(/\d/g).join('') * 60)) + Number(START_OF_THEWORKING_DAY.split(':')[1].match(/\d/g).join(''))
  let endOfDayTime = Number((END_OF_DEY.split(':')[0].match(/\d/g).join('') * 60)) + Number(END_OF_DEY.split(':')[1].match(/\d/g).join(''))
  let startTime   = (Number(MEETYNG_START.split(':')[0].match(/\d/g).join('') * 60) + Number(MEETYNG_START.split(':')[1].match(/\d/g).join(''))) + MEETYNG_DURATION
  if (endOfDayTime >= startTime) {
    if (beginningOfTheDay < startTime) {
      return true
    }

    return false
  }

  return false
}

let beginningToEnd = workingTime(START_OF_THEWORKING_DAY, END_OF_DEY, MEETYNG_START, MEETYNG_DURATION)
console.log(beginningToEnd)
