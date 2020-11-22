/*
By listing the first six prime numbers: 2, 3, 5, 7, 11 and 13, we can see that the 6th number is 13.

What is the 10001st prime number?
*/

const { isPrime } = require("./util");

let total = 0;
for (let i = 2; total < 10001; i += 1) {
   if (isPrime(i)) {
      console.log(total + 1, i);
      total += 1;
   }
}
