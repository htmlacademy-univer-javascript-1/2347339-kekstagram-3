/* eslint-disable no-console */

//module2-tasks
function getRandomIntFromRange(fromNum, toNum) {
  if (typeof fromNum !== 'number' || typeof toNum !== 'number') {
    console.error(new Error('Переданы значения, не являющиеся числами!'));
  }
  if (fromNum > toNum) {
    console.error(new Error('Начальное значение диапазона больше конечного!'));
  }
  fromNum = Math.ceil(fromNum);
  toNum = Math.floor(toNum);
  return Math.floor(Math.random() * (toNum + 1 - fromNum) + fromNum);
}

function hasLegalLength(string, maxLegalLength) {
  return string.length < maxLegalLength + 1;
}

