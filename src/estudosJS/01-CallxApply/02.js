// O primeiro parâmetro tanto de call quanto de apply é o próprio contexto, ou seja: o valor de this será exatamente o que você passar como parâmetro.
// Então qual a diferença entre eles? O segundo parâmetro.
// Enquanto apply aceita um array, call requer parâmetros divididos por vírgulas:

var myself = { age: 26 };

function isOlderThan() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(this.age < arguments[i]);
    }
}

isOlderThan.call(myself, 30, 40, 15);
// true true false

isOlderThan.apply(myself, [30, 40, 15]);
// true true false


// Qual a importância?
// A importância desses dois métodos e o porquê deles serem tão usados 
//(principalmente em libs) é bem simples: apply e call nos permitem pegar
// métodos emprestados reduzindo assim a quantidade total de código gerada e seguindo o DRY.