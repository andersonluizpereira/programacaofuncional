function init() {
    var name = 'Anderson';
    function hello() {
        console.log('Olá: ' + name);
    }
    hello();
}

init();

hello();

// A função de dentro (hello) tem acesso ao escopo externo dela (init). 
//Porém, ao sairmos de init, perdemos a visibilidade da função hello.
// Qual a importância?
// A capacidade de esconder informações também conhecida como: data privacy. 
//Isso é essencial para que possamos esconder informações que deveriam ser privadas e programar para uma interface e não para uma implementação.