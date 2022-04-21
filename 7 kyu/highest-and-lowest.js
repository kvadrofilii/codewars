'use strict';

const highAndLow = (numbers) => {
  // Создаём массив из строки
  let arr = numbers.split(' ');
  // Преобразуем строки в числа
  arr = arr.map((item) => Number(item));
  // Возвращаем строку из максимального и минимального числа в массиве
  return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
}


console.log(highAndLow('1 -3 5'));

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//Examples

//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"
//Notes

//All numbers are valid Int32, no need to validate them.
//There will always be at least one number in the input string.
//Output string must be two numbers separated by a single space, and highest number is first.
