'use strict';

const numberOfPairs = (gloves) => {
  // Создаю коллекцию из уникальных ключей и деструктурирую обратно в массив
  let colors = [...new Set(gloves)],
    obj = {},
    result = 0;

  // Создаю объект с ключами из цветов
  colors.forEach(color => obj = { ...obj, [color]: 0 });

  // Считаю сколько перчаток каждого цвета
  colors.forEach(color => {
    gloves.forEach(glove => (color === glove && obj[color]++));
  });

  for (let key in obj) {
    if (obj[key] !== 1) {
      if (obj[key] % 2 === 1) {
        result = result + (obj[key] - 1) / 2;
      } else {
        result = result + obj[key] / 2;
      }
    }
  }

  return result;
}

console.log(numberOfPairs(['blue', 'black', 'purple', 'purple', 'gray', 'black', 'gray', 'black', 'purple', 'purple', 'gray', 'black', 'gray', 'black', 'purple', 'purple', 'gray', 'black']));





//Pair of gloves

//Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

//Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

//Examples:

//input = ["red", "green", "red", "blue", "blue"]
//result = 2 (1 red pair + 1 blue pair)

//input = ["red", "red", "red", "red", "red", "red"]
//result = 3 (3 red pairs)
