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

const isPrime = number => {
   if (number == 2) return true;
   if (number % 2 === 0) return false;
   for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
   }
   return true;
};

module.exports = {
   fib: fibonacci,
   reverseNumber: reverseNumber,
   getSquare: getSquare,
   isPrime: isPrime,
};
