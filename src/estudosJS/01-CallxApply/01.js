// 1) Call x Apply
// As funções call e apply nos deixam invocar métodos como se estivéssemos no contexto de um outro objeto:

var myself = { firstName: 'Anderson', lastName: 'Luiz' };

function showFullName() {
    console.log(this.firstName + " " + this.lastName);
}

showFullName.call(myself);
showFullName.apply(myself);