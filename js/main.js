function getRandomIntFromRange(fromNum, toNum) {
  if (fromNum > toNum) {
    console.error(new Error('Начальное значение диапазона больше конечного!'));
  }
  return Math.floor(Math.random() * (toNum + 1 - fromNum) + fromNum);
}


