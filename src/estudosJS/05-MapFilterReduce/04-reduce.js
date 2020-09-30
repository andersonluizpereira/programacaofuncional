
var months = [
    {shortName: 'JAN', fullName: 'January',  number: 1},
    {shortName: 'FEB', fullName: 'February', number: 2}
];

var monthsAcc = months.reduce(function(acc, month) {
    return acc + '/' + month.shortName;
}, '');

console.log(monthsAcc);