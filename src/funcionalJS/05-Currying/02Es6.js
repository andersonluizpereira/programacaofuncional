
const greeting = greet => name => greet + ' ' + name;
const hello = greeting('Hello');

console.log(hello('World'));
console.log(hello('Matheus'));