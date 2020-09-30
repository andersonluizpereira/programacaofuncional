var greeting = function(greet) {
    return function(name) {
        return greet + ' ' + name;
    };
};

var hello = greeting('Hello');
console.log(hello('World'));
console.log(hello('Matheus'));