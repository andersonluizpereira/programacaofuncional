//A palavra-chave this no JavaScript funciona de uma maneira um pouco diferente das outras linguagens.
//Em linguagens OO comuns o this se refere a instância da classe corrente. 
//Porém, no JavaScript o valor de this é determinado pelo contexto de invocação da função e onde elas foram chamadas.
// Escopo Global
// No escopo global (em um browser) o this se refere ao objeto window, tanto dentro quanto fora de uma função:

document.write(this);  //[object Window]

function func() {
    return this;
}
document.write(func());  //[object Window]