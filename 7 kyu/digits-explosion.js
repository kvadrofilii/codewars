'use strict';

const explode = (str) => {
  // Создаём массив из строки
  let arr = str.split('');

  arr = arr.map((item) => {
    const number = Number(item);
    let result = '';
    for (let i = 0; i < number; i++) {
      result = result + number;
    }

    return result;
  });

  // Преобразуем массив в строку
  return arr.join('');
}

console.log(explode('3129'));

//Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

//Examples

//explode("312")
//should return :

//"333122"
