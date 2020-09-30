const sum = (x, y) => x + y;
const mult = (x, y) => x * y;

var calculate = (fn, x, y) => fn(x, y);

console.log(calculate(sum, 2, 5)); 
console.log(calculate(mult, 2, 5));