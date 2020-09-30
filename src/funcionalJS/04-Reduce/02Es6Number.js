
const numbers = [1, 2, 3];
const sum = (x, y) => x + y;
const numbersSum = numbers.reduce(sum, 10);
console.log(numbersSum)