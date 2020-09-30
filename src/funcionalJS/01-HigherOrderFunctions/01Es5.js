var sum = function(x, y) {
    console.log(x + y)
    return x + y;
};

var mult = function(x, y) {
    console.log(x * y)
    return x * y;
};

var calculate = function(fn, x, y) {
    return fn(x, y);
};

calculate(sum, 2, 5);
calculate(mult, 2, 5);