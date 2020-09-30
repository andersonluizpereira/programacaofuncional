// Map:
// Dado um array qualquer, como podemos fazer para transformá-lo, ou mapeá-lo, em um outro array?
// Existe a forma difícil (sem map):
var months = [
    {shortName: 'JAN', fullName: 'January',  number: 1},
    {shortName: 'FEB', fullName: 'February', number: 2}
];

var shortNameMonths = [];
for (var i = 0; i < months.length; i++) {
    shortNameMonths.push(months[i].shortName);
}

console.log(shortNameMonths);