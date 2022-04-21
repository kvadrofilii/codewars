'use strict';

const isIsogram = (str) => {
  // Проверяем на пустую строку
  if (str === '') {
    return true;
  }

  // Делаем одинаковый регистр букв (строчные)
  const strLower = str.toLowerCase();

  // Перебираем все буквы в слове
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      // Если сравниваемые буквы не на одной позиции и совпадают, то возвращаем false
      if ((i !== j) && (strLower[i] === strLower[j])) {
        return false;
      }
    }
  }

  // Если перебор закончился без повторяющихся букв - возвращаем true
  return true;
}

console.log(isIsogram('moOse'));
console.log(isIsogram('isogram'));

//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

//Example: (Input --> Output)

//"Dermatoglyphics" --> true
//"aba" --> false
//"moOse" --> false (ignore letter case)
