var numbers = [1, 2, 3];

var sum = function(x, y) {
    return x + y;
};

var numbersSum = numbers.reduce(sum, 0);
console.log(numbersSum)