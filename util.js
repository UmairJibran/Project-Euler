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

const sort = arr => {
   let holePosition;
   let valueToInsert;

   for (let i = 1; i < arr.length; i++) {
      valueToInsert = arr[i];
      holePosition = i;
      while (holePosition > 0 && arr[holePosition - 1] > valueToInsert) {
         arr[holePosition] = arr[holePosition - 1];
         holePosition = holePosition - 1;
      }
      arr[holePosition] = valueToInsert;
   }

   return arr;
};

const isAdjecent = (number1, number2) => {
   if (
      number1 - number2 === -1 ||
      number1 === number2 ||
      number1 - number2 === 1
   )
      return true;
   return false;
};

module.exports = {
   fib: fibonacci,
   reverseNumber: reverseNumber,
   getSquare: getSquare,
   isPrime: isPrime,
   sort: sort,
   isAdjecent: isAdjecent,
};
