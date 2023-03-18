const getRandomIntFromRange = (fromNum, toNum) => {
  if (typeof fromNum !== 'number' || typeof toNum !== 'number') {
    throw 'Переданы значения, не являющиеся числами!';
  }
  if (fromNum > toNum) {
    throw 'Началое значение интервала больше конечного!';
  }
  fromNum = Math.ceil(fromNum);
  toNum = Math.floor(toNum);
  return Math.floor(Math.random() * (toNum + 1 - fromNum) + fromNum);
};

const getRandomArrElem = (arr) => arr[getRandomIntFromRange(0, arr.length - 1)];

const hasLegalLength = (string, maxLegalLength) => string.length < maxLegalLength + 1;

const createIdGenerator = (stardId = 0) => {
  let curId = stardId;
  return () => curId++;
};

export {getRandomIntFromRange, getRandomArrElem, hasLegalLength, createIdGenerator};
