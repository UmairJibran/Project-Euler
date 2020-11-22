const fibonacci = number => {
   if (number === 0 || number === 1) return number;
   else return fibonacci(number - 1) + fibonacci(number - 2);
};

const reverseNumber = number => {
   let reversedResult = [];

   while (number > 1) {
      reversedResult.push(Math.trunc(number % 10));
      number /= 10;
   }

   return reversedResult.join("");
};

const getSquare = number => number * number;

module.exports = {
   fib: fibonacci,
   reverseNumber: reverseNumber,
   getSquare: getSquare,
};
