/*
A Palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 * 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const { reverseNumber, sort } = require("./util");

let palindromeNumbers = [];

for (let i = 100; i < 1000; i++) {
   for (let j = 100; j < 1000; j++) {
      let result = i * j;
      let reversedResult = reverseNumber(result);
      if (reversedResult == result) {
         palindromeNumbers.push(result);
      }
   }
}

const sortedArray = sort(palindromeNumbers);

console.log(sortedArray[sortedArray.length - 1]);
