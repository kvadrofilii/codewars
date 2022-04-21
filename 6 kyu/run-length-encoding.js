'use strict';

var runLengthEncoding = function (str) {
  if (str === '') {
    return [];
  }

  let result = [],
    count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result.push([count, str[i]]);
      count = 1;
    }
  }

  return result;
}


console.log(runLengthEncoding(""), []);
console.log(runLengthEncoding("aabc"), [[1, 'a'], [1, 'b'], [1, 'c']]);
console.log(runLengthEncoding("aab"), [[2, 'a'], [1, 'b']]);
console.log(runLengthEncoding("hello world!")), [[1, 'h'], [1, 'e'], [2, 'l'], [1, 'o'], [1, ' '], [1, 'w'], [1, 'o'], [1, 'r'], [1, 'l'], [1, 'd'], [1, '!']];



//Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

//Examples

//As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data, as one can see in the following example:

//runLengthEncoding("hello world!")
// //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
//It's very effective if the same data value occurs in many consecutive data elements:

//runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
// // => [[34,'a'], [3,'b']]
