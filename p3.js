/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

const number = 600851475143;

let primeFactors = [];

let remainder = number;

for (let i = 2; i <= remainder; i++) {
   let r = Math.floor(remainder / i);
   if (r === remainder / i) {
      remainder = remainder / i;
      primeFactors.push(i);
      i = 2;
   }
}

console.log(primeFactors.sort()[0]);
