function getRandomIntFromRange(fromNum, toNum) {
  if (typeof fromNum !== 'number' || typeof toNum !== 'number') {
    console.error(new Error('Переданы значения, не являющиеся числами!'));
  }
  if (fromNum > toNum) {
    console.error(new Error('Начальное значение диапазона больше конечного!'));
  }
  return Math.floor(Math.random() * (toNum + 1 - fromNum) + fromNum);
}
