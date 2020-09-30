var months = [
    {shortName: 'JAN', fullName: 'January',  number: 1},
    {shortName: 'FEB', fullName: 'February', number: 2}
];

var firstSemester = months.filter(function(month) {
    return month.number <= 1;
});

console.log(firstSemester);