//As respostas mais comuns são 1 ou 2, mas a resposta correta é undefined. A declaração de variáveis em JavaScript é hoisted (ou elevada), mas não sua inicialização. Portanto o código acima é equivalente a esse:

var n;
function init() {
    var n;
    console.log(n);
    n = 2;
}
n = 1;
init();