'use strict';

function getLengthOfMissingArray(arrayOfArrays) {
  if ((arrayOfArrays === null) || (arrayOfArrays.length === 0)) {
    return 0;
  }

  let array = [];

  for (let j = 0; j < arrayOfArrays.length; j++) {
    if ((arrayOfArrays[j] === null) || (arrayOfArrays[j].length === 0)) {
      return 0;
    } else {
      array.push(arrayOfArrays[j].length);
    }
  }

  array.sort((a, b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  });

  for (let i = array[0]; i < Infinity; i++) {
    if (array[i - array[0]] !== (i)) {
      return i;
    }
  }
}


console.log(getLengthOfMissingArray([]), 0);
console.log(getLengthOfMissingArray([[], [1, 2], [4, 5, 1, 1], [1, 2, 3], [5, 6, 7, 8, 9]]), 3);
console.log(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]), 2);
console.log(getLengthOfMissingArray([[null], [null, null, null]]), 2);
console.log(getLengthOfMissingArray([['a', 'a', 'a'], ['a', 'a'], ['a', 'a', 'a', 'a'], ['a'], ['a', 'a', 'a', 'a', 'a', 'a']]), 5);




//You get an array of arrays.
//If you sort the arrays by their length, you will see, that their length-values are consecutive.
//But one array is missing!


//You have to write a method, that return the length of the missing array.

//Example:
//[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

//If the array of arrays is null/nil or empty, the method should return 0.

//When an array in the array is null or empty, the method should return 0 too!
//There will always be a missing element and its length will be always between the given arrays. 

//Have fun coding it and please don't forget to vote and rank this kata! :-)

//I have created other katas. Have a look if you like coding and challenges.
