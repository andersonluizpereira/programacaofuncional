
// Função na Prototype Chain
// Quando um método está na prototype chain de um objeto, o this desse método vai se referir ao objeto que o está chamando, mesmo se o método não estiver definido nesse objeto:
var object = {
    func: function () {
        return this.name;
    }
};

var anotherObject = Object.create(object);
anotherObject.name = 'Matheus';

console.log(anotherObject.func()); //Matheus

// `Qual a importância?
// O this é um dos maiores responsáveis por erros para quem está iniciando com o JavaScript. 
//Portanto entender como ele funciona é de extrema importância para quem quer dominar a linguagem e gerar menos bugs.`