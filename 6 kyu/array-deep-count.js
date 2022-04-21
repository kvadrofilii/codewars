'use strict';

const deepCount = (a) => {
  let arr = [...a];
  // Проверяем есть ли вложенные массивы.
  let count = searchArray(arr);

  if (count === 0) {
    return arr.length;
  } else {
    for (let i = 0; i < Infinity; i++) {
      arr = myFlat(arr);
      console.log(arr);
      if (searchArray(arr) === 0) {
        return count + arr.length;
      } else {
        count = count + searchArray(arr);
      }
    }
  }
}

// Функция возвращает количество массивов на первом уровне. Если массивов нет, то возвращает 0.
export const searchArray = (array) => {
  let count = 0;

  array.forEach(item => {
    Array.isArray(item) && (count++);
  });
  return count;
}

// Функция поднятия массива на один уровень. Возвращает массив с поднятыми подмассивами первого уровня.

export const myFlat = (array) => {
  let result = [];

  array.forEach((item) => {
    Array.isArray(item)
      ?
      item.forEach((item) => {
        result.push(item);
      })
      :
      result.push(item);
  });

  return result;
}

console.log(deepCount([]), 0, "Expected 0")
console.log(deepCount([1, 2, 3]), 3, "Expected 3")
console.log(deepCount(["x", "y", ["z"]]), 4, "Expected 4")
console.log(deepCount([1, 2, [3, 4, [5]]]), 7, "Expected 7")
console.log(deepCount([[[[[[[[[]]]]]]]]]), 8, "Expected 8")


//Array.prototype.length will give you the number of top-level elements in an array.

//Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

//For example:

//deepCount([1, 2, 3]);  
////>>>>> 3
//deepCount(["x", "y", ["z"]]);  
////>>>>> 4
//deepCount([1, 2, [3, 4, [5]]]);  
////>>>>> 7
//The input will always be an array.
