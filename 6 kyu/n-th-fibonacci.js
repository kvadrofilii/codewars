'use strict';

const nthFibo = (n) => {
  let a = 0,
    b = 1,
    sum = 0;

  for (let i = 0; i < n - 1; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }

  return a;
};

console.log(nthFibo(1));
console.log(nthFibo(2));
console.log(nthFibo(3));
console.log(nthFibo(4));
console.log(nthFibo(5));

//I love Fibonacci numbers in general, but I must admit I love some more than others.

//I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

//For example:

//   nthFibo(4) == 2
//Because 2 is the 4th number in the Fibonacci Sequence.

//For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
