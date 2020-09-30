var numbers = [1, 4, 7, 10];

var isBiggerThanFour = function(value) {
    return value > 4;
};

var numbersBiggerThanFour = numbers.filter(isBiggerThanFour);
console.log(numbersBiggerThanFour)