//Nesse outro cenário abaixo, percebemos o reaproveitamento de código que podemos conseguir ao usar o map.
//Possuímos dois arrays de objetos diferentes, porém ambos tem o campo name, e precisamos de uma função que retorne um novo array apenas com os names dos objetos:
var students = [
    { name: 'Anna', grade: 6 },
    { name: 'John', grade: 4 },
    { name: 'Maria', grade: 9 }
];

var teachers = [
    { name: 'Mark', salary: 2500 },
    { name: 'Todd', salary: 3700 },
    { name: 'Angela', salary: 1900 }
];

var byName = function(object) {
    return object.name;
};

var byNames = function(list) {
    return list.map(byName);
};

console.log(byNames(students));
console.log(byNames(teachers));