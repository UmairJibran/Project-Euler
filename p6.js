/*
The sum of the squares of the first ten natural numbers is,
   1¬2 + 2¬2 + 32 + 4¬2 + 5¬2 + ¬6¬2 + 7¬2 + 8¬2 + 9¬2 + 10¬2 = 385

The square of the sum of the first ten natural numbers is,
   (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)¬2 = 55¬2 = 3025

Hence the difference between the sum of the squares of the first ten numbers and the square of the sum is: 3025 - 385 = 2640

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

const { getSquare } = require("./util");

let sumOfTheSquares = 0;
let squareOfTheSum = 0;
let difference = 0;

for (let i = 1; i <= 100; i += 1) {
   sumOfTheSquares += getSquare(i);
   squareOfTheSum += i;
}

difference = getSquare(squareOfTheSum) - sumOfTheSquares;

console.log(difference);
