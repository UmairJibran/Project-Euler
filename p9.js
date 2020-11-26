/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a¬2 + b¬2 = c¬2
For example, 3¬2 + 4¬2 = 9 + 16 = 25 = 5¬2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

const { getSquare } = require("./util");

for (let a = 0; a < 1000; a += 1) {
   for (let b = a + 1; b < 1000; b += 1) {
      for (let c = b + 1; c < 1000; c += 1) {
         if (Math.sqrt(getSquare(a) + getSquare(b)) === c)
            if (a > 0 && a + b + c === 1000) {
               console.log(
                  `a: ${a}, b: ${b}, c: ${c}. The Product of ${a} and ${b} and ${c} is `,
                  a * b * c
               );
            }
      }
   }
}
